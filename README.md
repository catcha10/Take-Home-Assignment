# Take-Home-Assignment
Code a server using Node.js

## Tasks 
1. Download the source files, to your local directory <br/>
2. Make sure you have install node, mongodb, mongoose, express, https, xml2json <br/>
   a) Install node  <br/>
   b) Install  $npm install mongoose https://www.npmjs.com/package/mongoose <br/>
   c) Install express.js https://www.npmjs.com/package/express <br/>
   d) Install xml2json https://www.npmjs.com/package/xml2json <br/>
   e) install mongodb <br/>
      i) 2 ways to install mongodb: <br/>
         - using Homebrew for Mac : https://brew.sh/ <br/>
         - manual install https://www.mongodb.com/download-center/community <br/> <br/>
         
      #Install using homebrew: <br/>
      Copy /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)” <br/>
      to terminal to  install homebrew <br/><br/>
      
      $brew update <br/>
      $brew install mongodb <br/>
      $ sudo mkdir -p /data/db <br/>
      $ sudo chmod 777 /data/db <br/>
      $ mongod <br/><br/>
      
3. Open terminal cd to path directory where your source files save “cd <directore path—>” <br/>
4. Terminal open new tab : $ node index

5. Install nodemon <br>
   npm install -g nodemon
Now that you have installed nodemon, start your app with <b>nodemon index</b> instead refresh your browser to view the changes.

===================================================================================================================

### Task 1 - Load database
1. Firstly open your browser go to http://localhost:8080/rates/load , for load all the data into mongodb database
  
### Task 2 - `GET /rates/latest`
Go to http://localhost:8080/rates/latest

### Task 3 - `GET /rates/YYYY-MM-DD`
Eg: Go to http://localhost:8080/rates/2018-10-25

### Task 4 - `GET /rates/analyze`
Go to http://localhost:8080/rates/analyze



## For Mocha Testing
$ npm install mocha --save
$ npm install chai

$ npm run test
