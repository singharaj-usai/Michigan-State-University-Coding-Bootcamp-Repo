# Create and Access an Amazon S3 Bucket

In the previous step, we explored AWS services. In this step, we'll create and access an Amazon S3 bucket.

Now that we've successfully set up an AWS account, it's time to integrate a web service into the Deep Thoughts application. We'll begin by creating an S3 bucket, which we'll use to store static assets. Although we could use the S3 console to create and manage the resource, instead we'll focus on how to use an AWS npm package to access the web service programmatically in the Deep Thoughts application.

## Install the Node.js Dependencies

1. Follow these steps to install the Node.js dependencies:

2. In the command prompt, navigate to the root directory of the Deep Thoughts application.

Run the command `npm install` to download the dependencies to the `node_modules` folder from npm.

Next, we'll install the AWS command-line interface.

## Install the AWS CLI

The AWS CLI lets you configure the access keys and communicate with the various web services directly from the command line. Follow the instructions for your operating system (macOS or Windows).

### Install the AWS CLI on macOS

On macOS, follow these steps to install AWS CLI:

1. Download the [AWS CLI installer for macOS](https://awscli.amazonaws.com/AWSCLIV2.pkg).

2. Double-click the downloaded file to launch the installer.

3. Install to the recommended location: `/usr/local/aws-cli`. This might require an OS password for `sudo` write permissions.

4. The installer automatically creates a symlink at `/usr/local/bin/aws` that links to the main program in the installation folder mentioned in the preceding step.

5. Verify a successful installation by running the following command:

```console
aws --version
```

That's all there is to it!

### Install the AWS CLI on Windows

On Windows, follow these steps to install the AWS CLI:

1. Download the [AWS CLI MSI installer for Windows (64-bit)](https://awscli.amazonaws.com/AWSCLIV2.msi).

2. Run the downloaded MSI installer and follow the on-screen instructions. By default, the AWS CLI installs to `C:\Program Files\Amazon\AWSCLIV2.`

3. To verify the installation, open the Start menu, search for `cmd` to open a command-prompt window, and at the command prompt use the `aws --version command`.

**Deep Dive**

If Windows can't find the program, you might need to close and reopen the command-prompt window to refresh the path or add the installation directory to your PATH environment variable manually.

For more information, refer to the [AWS documentation on adding the installation directory to your command-line path](https://docs.aws.amazon.com/cli/latest/userguide/install-windows.html#awscli-install-windows-path).

## Configure Your AWS Credentials

Next we'll set up the AWS CLI by running the following command:

```console
aws configure
```

This will open a prompt at the command line that looks similar to the following:

```console
$ aws configure
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
Default region name [None]: us-east-2
Default output format [None]: json
```

Replace the preceding values with your own values for the AWS Access Key ID and the AWS Secret Access Key for your IAM user.

Notice that the value for the **region name** is `us-east-2`. This region points to area availability zones located in Ohio. Each region is a separate geographic area. **Availability zones**, however, are isolated locations within each region. Local zones enable you to place resources, such as compute and storage, in multiple locations closer to your end users. Although the `us-east-2` region might not be the one closest to you, you'll use it throughout this course for consistency.

One of the major benefits of cloud computing is leveraging the vast infrastructure systems of a cloud provider. With the global reach of AWS, we can connect to users by orders of magnitude faster due to the number of data centers AWS uses throughout the world. There are six regions in the US currently, with more being built at a steady rate around the globe.

**Deep Dive**

To learn more, review the [AWS documentation on global infrastructure](https://aws.amazon.com/about-aws/global-infrastructure/).

High performance and speed is relative to the distance that the request must travel from the data center. For example, when an S3 bucket is created, we must designate a region so that AWS knows which data center contains the S3 bucket.

**Important**

> Different regions will have different access to services. So if you have trouble finding a web service you created, you might be in the wrong region.

## Create the Interface between Node.js and AWS

In this step, we'll use the `aws-sdk` package to interface with AWS from the Node.js application. This package is a **software development kit**, or **SDK**.

Follow these steps to start using the AWS SDK:

1. Create a new folder called `server` in the root directory of the Deep Thoughts application if you have not done so already.

2. In this folder, create a file named `create-bucket.js`.

3. In VS Code, open `create-bucket.js` and add the following expression at the top of the file:

```js
// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
```

This package is responsible for the API that allows the application to communicate with the web service.

4. Import the `uuid` package to create a unique S3 bucket name by adding the following code to `create-bucket.js`:

```js
const { v4: uuidv4 } = require('uuid');
```

5. Next, add the following statement to configure the region:

```js
// Set the region
AWS.config.update({ region: 'us-east-2' });
```

The region must be updated to communicate with the web service.

6. Create the S3 service object by adding the following expression:

```js
// Create S3 service object
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
```

The preceding expression creates the `s3` instance object with the designated API. By specifying the API version, we ensure that the API library we're using is compatible with the following commands.

7. Next, create the `bucketParams` object that assigns the metadata of the bucket (such as the bucket name) by adding the following code:

```js
// Create the parameters for calling createBucket
var bucketParams = {
  Bucket: 'user-images-' + uuidv4(),
};
```

8. Now we'll call the `s3` instance object to create an S3 bucket using the `bucketParams—by` adding the following code:

```js
// call S3 to create the bucket
s3.createBucket(bucketParams, (err, data) => {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Success');
  }
});
```

In the preceding statement, we used a callback function with the `createBucket` method and the `bucketParams` object to create an S3 bucket.

9. Now let's download the NPM packages to the `node_modules` directory with the following command:

```console
npm install aws-sdk uuid
```

10. Now run the `create-bucket.js` file at the command line from the server directory of the Deep Thoughts application, as follows:

```console
node create-bucket.js
```

You should see a success message in the command line if you've successfully created a new S3 bucket.

11. Let's verify that the bucket was created by going to the S3 console from the AWS Management Console in the browser, where we should see something like the following image:

![](../Images/800-user-images.png)

`A screenshot depict an S3 bucket, named user-images, that's listed in the S3 console.`

Congratulations, you've just connected to your first web service. With a successful connection, you confirmed that `aws-sdk` could use the credentials that you configured, using the AWS CLI to communicate with S3. This technique allows you to use the keys without exposing them in the code.

## Commit Your Changes, and Close the GitHub Issue

Before we forget, let's close the GitHub issue, add and commit the work, and then merge the `feature/s3-setup` branch into the `develop` branch before moving on to the next feature.

Soon we'll build on this setup by using `aws-sdk` and the AWS CLI to interface with AWS to form the back end of the Deep Thoughts application.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.