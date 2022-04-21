console.log("this is tut22.0.0");
// npm is built in with node js .. no need to install it..just enter npm in terminal to get details

// enter 'npm init' and give details, it would initialise this folder as a node package with the given details(including dependencies)

// now whatever package(like express,slugify) we install will b added to these dependencies..by entering 'npm install slugify'

// to download a specific version e.g., of slugify, write slugify@1.3.5
// in above, 1.3.5 is 'major.minor.patch'..major version + minor function added and patch means a set of changes to fix,update,etc
// e.g., after fixing , version updates from 1.0.0 to 1.0.1
// after adding new features not breaking previous features, it goes from 1.0.0 to 1.1.0..previous users can update without a problem
//after eliminating some functions it goes from 1.0.0 to 2.0.0
// its one of the ways of software versioning..this is done in node js


//DEPENDENCIES
// means package depend on these.. these dependencies can inturn depend on further dependencies..thereby we can far more dependencies after installing just one

// DEV DEPENDENCIES
//they are only used in development not in production e.g., NODEMON

// NODEMON
//Its a command line utility that restarts the server when source has some changes
// enter 'npm install nodemon --save-dev 
// Can be used globally(for any project) by writing 'npm install nodemon --global' 

// now run your file using nodemon tut22.js and if we make some changes and save, then it will automatically change the output

// SHORTCUT FOR INSTALLING
// 'npm i slugify'

// in dependencies, ^1.6.0, ^ means it installs this exact same version
// using ~ installs latest version 

// for dev dependencies , > is used 