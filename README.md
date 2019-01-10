# Take-Home-Assignment
Code a server using Node.js

## Tasks 
1. Download the source files, to your local directory
2. Make sure you have install node, mongodb, mongoose, express, https, xml2json 
   a) Install node  
   b) Install  $npm install mongoose https://www.npmjs.com/package/mongoose 
   c) Install express.js https://www.npmjs.com/package/express
   d) Install xml2json https://www.npmjs.com/package/xml2json
   e) install mongodb
      i) 2 ways to install mongodb:
         - using Homebrew for Mac : https://brew.sh/
         - manual install https://www.mongodb.com/download-center/community
         
      #Install using homebrew:
      Copy /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)”   
      to terminal to  install homebrew
      
      $brew update
      $brew install mongodb
      $ sudo mkdir -p /data/db
      $ sudo chmod 777 /data/db
      $ mongod
      
3. Open terminal cd to path directory where your source files save “cd <directore path—>”
4. Terminal open new tab : $ node index

===================================================================================================================

### Task 1 - Load database
1. Firstly open your browser go to http://localhost:8080/rates/load , for load all the data into mongodb database
  
### Task 2 - `GET /rates/latest`
Go to http://localhost:8080/rates/latest

### Task 3 - `GET /rates/YYYY-MM-DD`
Eg: Go to http://localhost:8080/rates/2018-10-25

### Task 4 - `GET /rates/analyze`
Go to http://localhost:8080/rates/analyze

### For mocha test
Open terminal npm run test
