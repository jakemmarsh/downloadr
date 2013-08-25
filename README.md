Downloadr
============
Downloadr is an open-source, anonymous web app for sharing files built on the [MEAN stack](http://blog.mongodb.org/post/49262866911/the-mean-stack-mongodb-expressjs-angularjs-and). It uses AngularJS for the frontend, NodeJS/Express for the server, and MongoDB for file storage.

- Files are uploaded via a simple web form, and given a unique identifier/web address. There are no file size limits by default.
- This link can be shared with any number of people to allow them to download the uploaded file. No throttling occurs as it does on many file sharing sites.
- Uploaded files are given a TTL (time to live) of 48 hours, meaning that regardless of the number of downloads a file has, it is completely removed from the database after 48 hours and can no longer be viewed or downloaded.

All interactions are completely anonymous and no data is stored about the user. This includes both uploading and downloading files.
