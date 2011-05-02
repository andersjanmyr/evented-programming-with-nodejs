!SLIDE
# Deployment

!SLIDE small commandline
# Nodester
    $ nodester npm install express
    $ git push nodester master
    Counting objects: 5, done.
    Delta compression using up to 2 threads.
    Compressing objects: 100% (3/3), done.
    Writing objects: 100% (3/3), 341 bytes, done.
    Total 3 (delta 2), reused 0 (delta 0)
    remote: Syncing repo with chroot
    remote: From /node/hosted_apps/andersjanmyr/1346-7856c14e6a5d92a6b5374ec4772a6da0.git/.
    remote:    38f4e6e..8f59169  master     -> origin/master
    remote: Updating 38f4e6e..8f59169
    remote: Fast-forward
    remote:  Gemfile.lock |   10 ++++------
    remote:  1 files changed, 4 insertions(+), 6 deletions(-)
    remote: Checking ./.git/hooks/post-receive
    remote: Attempting to restart your app: 1346-7856c14e6a5d92a6b5374ec4772a6da0
    remote: App restarted..
    remote:
    remote:
    remote:   	\m/ Nodester out \m/
    remote:
    remote:
    To ec2-user@nodester.com:/node/hosted_apps/andersjanmyr/1346-7856c14e6a5d92a6b5374ec4772a6da0.git
       38f4e6e..8f59169  master -> master

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

!SLIDE
# no.de (Joyent)

## I have been unable to get an account








