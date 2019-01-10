# Take-Home-Assignment
Code a server using Node.js

## Tasks 
1. Download the source files, to your local directory
2. Open terminal cd to path directory where your source files save “cd <--directore path—>”
3. Make sure you have 
   
    <ol type="i">
      <li>Install node <br/>
          https://www.npmjs.com/get-npm
      </li>
      <li>Install express.js<br/>
          https://www.npmjs.com/package/express
      </li>
      <li>Install xml2json<br/>
          https://www.npmjs.com/package/xml2json
      </li>
      <li>Install mongodb<br/>
           2 ways to install:<br/>
           a) using Homebrew for Mac : https://brew.sh/ . <br/>
              Install using homebrew:<br/>
              Terminal : Copy /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)” to terminal, https://brew.sh/
           b) manual install https://www.mongodb.com/download-center/community .  
            <br/>
             Follow below command:<br/>
            $brew update<br/>
            $brew install mongodb<br/>
            $ sudo mkdir -p /data/db<br/>
            $ sudo chmod 777 /data/db<br/>
            //to run mongod
            $ mongod      
      </li>
      <li>Install  $npm install mongoose<br/>
        https://www.npmjs.com/package/mongoose
      </li>
      <li>Install nodemon
          $npm install -g nodemon <br/>
          Now that you have installed nodemon, start your app with <b>nodemon index</b>. 
      </li>
    </ol>
4. Start your app, $nodemon index


=============================================================================================================


### Task 1 - Load database
1. Firstly, Open your browser go to “http://localhost:8080/rates/load” , for load all the data into mongodb database
  
### Task 2 - `GET /rates/latest`
Go to “http://localhost:8080/rates/latest”

### Task 3 - `GET /rates/YYYY-MM-DD`
Eg: Go to “http://localhost:8080/rates/2018-10-25”,

### Task 4 - `GET /rates/analyze`
Go to “http://localhost:8080/rates/analyze”

=============================================================================================================

### For Mocha Testing
Open new tab terminal $npm run test


