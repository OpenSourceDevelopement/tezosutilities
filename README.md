# README #
 
This repo would be for Generating public and private key along with the pass phrase on the tezos block chain . Its also configured for file upload to amazonS3 using multer-s3(npm package for file upload).
### In Breif ###

* It uses conseiljs framework to create a public Key and Private Key that belongs to tezos BlockChain 
* Those keys can be activated in the tezos BlockChain
* It also contain fileUploader service where we can upload files (of any format) to amazonS3 directly using the multer-s3
* This project is setup in configurable manner such that we can configure mongoDb for future use
* API - /getAccount
    * The Account creation procedure is aldready been implemented in the /getAccount api . Its a post Request that has to be made via Postman or using Axios or fetch in reactjs/Angular . It returns the public and private Key. That can further be activated in the tezos BlockChain and used .
* API - /uploadFile
    * Uploads File to S3 bucket
* This repository also contains the http-service using which api calls can be made .

### What is this repository for? ###
 
* Generates public and private key along with the pass phrase for the tezos block chain when we call /getAccount  
* Uploads File to S3 bucket in AWS can use the api /uploadFile
* Dependency used : Conseiljs and conseiljs-softsigner for Account creation  - /getAccount 
* Dependency used for File upload :  multer , multer-s3 - /uploadFile

### Configuration Steps

* For File Upload to S3 -
    * Create a AWS(Amazon Web Services) Account
    * Navigate to IAM and get the accessKeyId , secretAccessKey , Also get the bucket Name from S3 (its a storage service provided by AWS)
    * Place these keys in the fileUpload.js in the Middleware Folder 

* For setting  up MongoDB -
    * To be able to use MongoDB's cloud services, you'll need a MongoDB Atlas account. To create one, go to its home page(https://www.mongodb.com/cloud/atlas/register) and press the Get started free button.
    * After you complete the short sign-up form, you'll be redirected to the cluster creation wizard. In its first section, you'll have to pick the cloud provider and region you prefer.
    *  Create a new user for yourself by pressing the Add new user button. In the dialog that pops up, type in your desired username and password, select the Read and write to any database privilege, and press the Add User button.
    * Next, in the IP Whitelist section, you must provide a list of IP addresses from which you'll be accessing the cluster. For now, providing the current IP address of your computer is sufficient.
    *  Go to the Overview tab and press the Connect button.You should now be able to see your connection string. 
    * Provide this connection String in the Config -> env in all the different environment files (local , development , production , test)
 
 * Calling the API Using Postman
    *  Go to https://www.postman.com/downloads/ and choose your desired platform among Mac, Windows or Linux. Click Download.
    * Your download is in progress message should now display on the Apps page. Once the Postman download is completed, click on Run.
    * You will see the Startup Screen
    * Working with GET Requests
        * Set your HTTP request to GET.
        * In the request URL field, input link
        * Click Send
        * You will see 200 OK Message if Success
    * Working with POST Requests
        * Click a new tab to create a new request.
        * Set your HTTP request to POST.
        * In the request URL field, input link
        * switch to the Body tab fill in the required feilds
        * Click Send.

* Npm Versions
    * Any Npm version can be used above 10.20.0

### How do I get set up? ###
 
* Clone the repository
* Install npm and node in the operating system
* Install the required dependencies using npm i / npm install
* Run it by using the command npm start or npm run nodemon
* Server is started !!
