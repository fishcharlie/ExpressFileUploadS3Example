# ExpressFileUploadS3Example


### AWS User Setup Steps

1.  Create an [Amazon Web Services (AWS)](https://aws.amazon.com) account.
2.  Once at the main AWS dashboard search for the `IAM` service or scroll down to find the `IAM` service and select that.
3.  On the left panel of the `IAM` service select `Users`.
4.  Click `Add user` at the top of the screen.
5.  Enter a `User name` in the text field. This can be anything (ex. `webuser`, `s3user`, `appkey`, etc.)
6.  Click the check box next to `Programmatic access`.
7.  Click `Next: Permissions`.
8.  Select `Attach existing policies directly`.
9.  In the search field right below that type in `S3`.
10. Click on the check box next to `AmazonS3FullAccess`.
11. Scroll down and click on the `Next: Tags` button.
12. Skip the next screen by pressing "Next: Review" (Unless you want to add specific tags for the user)
13. Click `Create user`.
14. This will display a table with your `Access key ID` and `Secret access key`. You will need to click the `Show` button to view your `Secret access key`. **Important: this is the *only* time you will be able to see your secret access key without regenerating it, so please be sure to save it somewhere secure.**

### AWS S3 Bucket Creation

1.  Go to the main AWS dashboard.
2.  Search for or scroll down to select `S3`.
3.  Click `Create bucket`.
4.  Give your bucket a unique name. This could be your project name or whatever you want to call it.
5.  Select the region you wish to store your bucket data in.
6.  Click `Next`.
7.  The next panel "Configure Options" allows you to set custom properties for your bucket. For now we will use the default settings so click `Next`.

8. The next panel "Set Permissions" allows you to set public permissions for your bucket:  

Uncheck: Block new public ACLs and uploading public objects (Recommended) 
Uncheck: Remove public access granted through public ACLs (Recommended) 
Uncheck: Block new public bucket policies (Recommended) 
Uncheck: Block public and cross-account access if bucket has public policies (Recommended) 

9.  Click `Next`.
10. Click `Create bucket`.


### Project Setup Steps

1.  After creating an IAM user and S3 bucket, clone this repo to your computer.
2.  Run `npm install` once in the project directory to install all dependancies required for this project.
3.  Change the `keys.js` file to include your IAM user keys and the name of your S3 bucket.
4.  Review the code, and implement in your own projects or applications.
5.  Have fun!!!


### Important Notes

-   The URL to access the objects you upload will be `https://s3-yourawsregioncode-amazonaws.com/YOURS3BUCKETNAME/FILEPATH`, see [this link](http://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) for what to put in place of `yourawsregioncode`. For example if my S3 bucket was called `s3examplebucket`, in the US West (Oregon) region and I had a file in the root directory called `picture.jpg` the URL to access it would be `https://s3-us-west-2.amazonaws.com/s3examplebucket/picture.jpg`
-   You can use [Cyberduck](https://cyberduck.io) or the [AWS Console](https://console.aws.amazon.com/console/home) to view  files, delete files, upload files, download files, and much more in your S3 bucket.
-   Amazon Web Services S3 is **not** a free service. Please be aware of all pricing related to this service. As of 08/24/2017 the pricing infomation can be found at [this link](https://aws.amazon.com/s3/pricing/).
-   Contact me with any questions!! You can use my [contact page](https://blog.charlie.fish/contact). Feel free to also submit issues or pull requests on GitHub.
