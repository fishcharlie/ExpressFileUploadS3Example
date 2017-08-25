# ExpressFileUploadS3Example



**AWS User Setup Steps:**

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
11. Scroll down and click on the `Next: Review` button.
12. Click `Create user`.
13. This will display a table with your `Access key ID` and `Secret access key`. You will need to click the `Show` button to view your `Secret access key`. **Important: this is the *only* time you will be able to see your secret access key without regenerating it, so please be sure to save it somewhere secure.**



**AWS S3 Bucket Creation:**

1.  Go to the main AWS dashboard.
2.  Search for or scroll down to select `S3`.
3.  Click `Create bucket`.
4.  Give your bucket a unique name. This could be your project name or whatever you want to call it.
5.  Select the region you wish to store your bucket data in.
6.  Click `Next`.
7.  The next panel allows you to set custom properties for your bucket. For now we will use the default settings so click `Next`.
8.  Under the drop down for `Manage public permissions` select `Grant public read access to this bucket`. **Important: this will allow anyone to view all the data you put in the bucket. There are better ways to secure the data but since this is a basic tutorial we won't be going over those concepts here.**
9.  Click `Next`.
10. Click `Create bucket`.



**Project Setup Steps:**

1.  After creating an IAM user and S3 bucket, clone this repo to your computer.
2.  Run `npm install` once in the project directory to install all dependancies required for this project.
3.  Change the `keys.js` file to include your IAM user keys and the name of your S3 bucket.
4.  Review the code, and implement in your own projects or applications.
5.  Have fun!!!



**Important Notes:**

-   The URL to access the objects you upload will be `https://s3-yourawsregioncode-amazonaws.com/YOURS3BUCKETNAME/FILEPATH`, see [this link](http://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) for what to put in place of `yourawsregioncode`. For example if my S3 bucket was called `s3examplebucket`, in the US West (Oregon) region and I had a file in the root directory called `picture.jpg` the URL to access it would be `https://s3-us-west-2.amazonaws.com/s3examplebucket/picture.jpg`
-   Amazon Web Services S3 is **not** a free service. Please be aware of all pricing related to this service. As of 08/24/2017 the pricing infomation can be found at [this link](https://aws.amazon.com/s3/pricing/).
-   Contact me with any questions!! You can find me on Twitter [@char_fish](https://twitter.com/char_fish), direct messages should be enabled and I would be more than happy to answer any questions.
