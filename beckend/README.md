# thechoicebox.com

This is the backend of the site.

---
## Requirements

For development, you will only need Node.js and a node global package, NPM, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v12.18.3

    $ npm --version
    6.14.6

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/barefacedbear/tcb_js
    $ cd tcb_js
    $ npm install

## Configure app

Open `.env` then edit it with your settings. You will need:

- MySQL Username & Password;
- A database names as `thechoicebox`;


## For Authorization

For accessing APIs after login an authorization token is required in the following format:

`thechoicebox ${JWT_TOKEN}`


## Running the project in development mode

    $ npm run dev


## Production deployment
- Zip "images", "src", "app.js", "package-lock.json" and "package.json" and upload it to server folder as specified by administrator.
- After copying stop the server and reload the page.
- Then click "Run NPM Install". Once finished restart the server.
- Then click "Run JS Script". Once successfully done the app will start within few seconds.
