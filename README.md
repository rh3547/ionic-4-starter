# Ionic 4 Starter App
This is a starter clientside application using Ionic 4. It represents a starting point for client app development that includes the following:
- Absolute path aliases for easy importing of components throughout the application (@pages, @service, etc).
- Inclusion of our ng-etg-base NPM package. Includes the following:
    - Authentication services for various sources.
    - A generic API service to interact with our .NET API.
    - An alert service to easily pop toast notifications and alert dialogs.
    - A date service for easy datetime interaction via moment.js.
- Routing and Auth Guards.
- Examples of all basic Angular "objects" (component, directive, pipe, service, model).
- Full-fledged internal SCSS style guide.

---

## Setup
#### Project Dependencies
1. Before running the application, run `npm install` to install application dependencies.
2. Be sure to update the environment settings for any backend URLs, access keys, AWS Cognito user pools, etc. The environment files are located in the `src/environments` directory.

---

## Project Commands
### Running the Application Locally (`ng serve`)
1. To Start the application locally, run the command `ng serve` in the project directory. If you get an error running an 'ng' command, you may need to install the Angular CLI with `npm install -g @angular/cli`. Then re-run `ng serve`.
2. Webpack will compile the application, and the content will be served locally. A browser should open automatically.
3. If a browser doesn't open, open a browser manually and visit [localhost:4200](localhost:4200).

### Building the Application (`ng build`)
1. To build the distribution files for the application, run the command `ng build` in the project directory.
2. Webpack will compile and build your application, creating the distribution in the `dist` folder at the root of the project directory.

### S3 Deployment (`npm run deploy`) (if using AWS S3)
#### AWS CLI Installation
1. Ensure the AWS CLI is installed. You can view installation instructions [here](https://docs.aws.amazon.com/cli/latest/userguide/install-windows.html#install-msi-on-windows). MSI installer is suggested.
2. Verify the AWS CLI is installed by running `aws --version`. If the command is not recognized, try closing a re-opening your CMD.
   
#### AWS CLI Configuration
1. Before the AWS CLI can be used, you must configure it with your AWS user account. Enter `aws configure` to begin the process.
2. The first thing requested is your access key ID and secret access key. To get these keys, first log in to the [AWS Management Console](https://console.aws.amazon.com/console/home).
3. Click on your user name at the top right of the page.
4. Click on the Security Credentials link from the drop-down menu.
5. On the left sidebar, click "Users".
6. Click on the username of your user in the list.
7.  Click the "Security credentials" tab.
8. Scroll down to the "Access keys" section and click "Create access key".
9. In the pop-up that is shown after creation, you will see your Access key ID, and Secret access key.
10. Copy both of these and enter them into the prompts for the AWS CLI configuration.
11. For "Default region name", enter the region in which your service should operate in. For example, "us-east-2".
12. For "Default output format", enter "json".
13. Now the AWS CLI should b configured with your account and can be used to deploy local changes to the S3 bucket.

#### AWS CLI Deploy Command
1. In the `package.json` file, update the S3 bucket name in the `deploy` script (already done for this project, but noted here in case the name changes). Change `s3://<S3 BUCKET NAME HERE>` to include the name of the bucket to deploy to.
2. In the same `package.json` file, update the CloudFront `distribution-id` value (already done for this project, but noted here in case the id changes). Change `--distribution-id <DISTRIBUTION ID HERE>` to include the name of the CloudFront distribution.
3. To deploy local changes to the S3 bucket, run `npm run deploy`.
4. Running this command will build the application with webpack, and then upload the dist folder to the S3 bucket. The console may show this as a failure because it returns exit code 1, but the command ran successfully despite this.
5. If you wish to invalidate the CLoudFrnt cache so it will pull fresh files from S3, run `npm run invalidate`.