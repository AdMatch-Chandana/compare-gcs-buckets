# compare-gcs-buckets

## Prerequisites

- Node.js installed
- Google Cloud SDK installed and configured

## Configuration

Before running the script, make sure to update the configuration parameters in the script

1. **Update Bucket and Directory Names:**

   Open the script file (`index.js`) and locate the following lines:

   ```javascript
   const sourceBucket = 'your-source-bucket-name';
   const sourceDirectory = 'your-source-directory-name';
   const destinationBucket = 'your-destination-bucket-name';
   const destinationDirectory = 'your-destination-directory-name';

## Setup Instructionsv

1. **Login to GCP:**

   Run the following command to authenticate with GCP:

   ```bash
    gcloud auth application-default login

2. **Select the GCP Project:**

    Set the GCP project for this project using the following command. Replace PROJECT_ID with your actual GCP project ID.

   ```bash
   gcloud config set project PROJECT_ID

3. **Install Dependencies:**

    Run the following command to install project dependencies:
    
    ```bash
    npm install

3. **Run the Project:**

    Execute the following command to run the Node.js project:

    ```bash
   node .




