const { Storage } = require('@google-cloud/storage');

const sourceBucket = 'bkt-prj-eng-d-reds-sync-svc-absa-ttd-reds-sync-out-new';
const sourceDirectory = "wnl119h";
const destinationBucket = 'bkt-prj-eng-d-reds-sync-svc-absa-ext-ttd-reds-sync-out-new';
const destinationDirectory = "wnl119h";

const storage = new Storage();

async function compareFiles() {
  try {
    const missingFiles = [];
    // List files in the first bucket
    const [files1] = await storage.bucket(sourceBucket).getFiles({
      prefix: sourceDirectory,
    });
    // List files in the second bucket
    const [files2] = await storage.bucket(destinationBucket).getFiles({
      prefix: destinationDirectory,
    });

    // Compare file names
    files1.forEach(async (file1) => {
      const file2 = files2.find((f) => (f.name + '.gz') === file1.name);

      if (!file2) {
        missingFiles.push(file1.name);
        console.log(`File ${file1.name} not found in ${destinationBucket}`);
      }
    });
    if (missingFiles.length === 0) {
      console.log('All files from the first bucket are found in the second bucket');
    }
  } catch (err) {
    console.error('Error comparing files:', err);
  }
}

compareFiles();
