!SLIDE
# Deployment


!SLIDE small commandline
# Heroku

    $ heroku create APP_NAME --stack cedar

    $ cat Procfile
    web: node lib/app.js

    $ cat package.json
    { "name":"pinga",
      "version":"0.0.1",
      "dependencies":{ "express":"","request":"", "nodemailer":"" }
    }

    $ git push heroku master
    ...
    -----> Installing dependencies with npm 1.0.8
       Procfile declares types -> web
    -----> Launching... done, v27



!SLIDE small commandline
# Cloud Foundry
    $ npm install express  # Install locally
    mime@1.2.1 ./node_modules/express/node_modules/mime
    connect@1.4.0 ./node_modules/express/node_modules/connect
    qs@0.1.0 ./node_modules/express/node_modules/qs
    express@2.3.0 ./node_modules/express

    $ vmc push
    Would you like to deploy from the current directory? [Yn]: Y
    Application Name: snake
    Application Deployed URL: 'snake.cloudfoundry.com'?
    Detected a Node.js Application, is this correct? [Yn]:
    Memory Reservation [Default:64M] (64M, 128M, 256M, 512M, 1G or 2G)
    Creating Application: OK
    Would you like to bind any services to 'snake'? [yN]:
    Uploading Application:
      Checking for available resources: OK
      Packing application: OK
      Uploading (1K): OK
    Push Status: OK
    Staging Application: OK
    Starting Application: ........OK


!SLIDE bullets
# Hosting yourself

* Run it behind nginx
* Listen for errors
* Use a process monitor (forever, supervisor, god, ...)





