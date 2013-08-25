Downloadr
============
Downloadr is an open-source web app built on the [MEAN](http://blog.mongodb.org/post/49262866911/the-mean-stack-mongodb-expressjs-angularjs-and) stack. It uses AngularJS for the frontend, NodeJS/Express for the server, and MongoDB for file storage.

- Files are uploaded via a simple web form, and given a unique identifier/web address.
- This link can be shared with any number of people to allow them to download the uploaded file.
- Uploaded files are given a TTL (time to live) of 48 hours, meaning that regardless of the number of downloads a file has, it is removed from the database after 48 hours and can no longer be viewed or downloaded.
