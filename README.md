# README #
 
This README would normally document whatever steps are necessary to get your application up and running.
 
### In Breif ###
 
* It uses conseiljs framework to create a public Key and Private Key that belongs to tezos BlockChain 
* Those keys can be activated in the tezos BlockChain
* It also contain fileUploader service where we can upload files (of any format) to amazonS3 directly using the multer-s3
* This project is setup in configurable manner such that we can configure mongoDb for future use
* The Account creation procedure is aldready been implemented in the /getAccount api . Its a post Request that has to be made via Postman or using Axios or fetch in reactjs/Angular . It returns the public and private Key. That can further be activated in the tezos BlockChain and used .
* This repository also contains the http-service using which api calls can be made .
 
### What is this repository for? ###
 
* Generates public and private key along with the pass phrase for the tezos block chain when we call /getAccount  
* Uploads File to S3 bucket in AWS can use the api /uploadFile
* MongoDb configurations are done so it can be used if needed
* Dependency used : Conseiljs and conseiljs-softsigner for Account creation  - /getAccount 
* Dependency used for File upload :  multer , multer-s3 - /uploadFile
 
### How do I get set up? ###
 
* Clone the repository
* Install npm and node in the operating system
* Install the required dependencies using npm i / npm install
* Run it by using the command npm start or npm run nodemon
* Server is started !!
