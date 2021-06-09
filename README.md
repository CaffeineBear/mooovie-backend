# Mooovie-backend

## To install
To install node packages:
```
npm install
```

You need to setup the PostgreSQL database and setup its environment variable.
I recommend to use ElephantSQL (https://www.elephantsql.com/). 

Once you signed up to ElephantSQL, you need to copy those information 
and add to your following environment variables. 
```
export MOOOVIE_DB_HOST='rosie.db.elephantsql.com'
export MOOOVIE_DB_PORT='5432'
export MOOOVIE_DB_USER=<Your User Name for instance>
export MOOOVIE_DB_PASSWORD=<Your Password for instance>
export MOOOVIE_DB_NAME=<Your User Name for instance>
``` 

Now copy the schema from `/server/services/mooovie-schema.sql` file 
and paste at ElephantSQL's SQL browser.

Once you have added, run following command from the root.
```
node ./server/services/insertDB.js
```
This will insert the new data to the database.

## Confirming data existence
In ElephantSQL's browser tab,
run the following:
```
SELECT * FROM ShowTimes;
```
If you see any data you can now run the backend app.

## To run
```
npm start
```

## To run with dev mode
```
npm run watch:dev
```
