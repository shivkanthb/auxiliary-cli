const fs = require('fs');
const os = require('os');


const dbdir = os.homedir() + '/auxdb';


function createDbFolderIfNotExist() {
  if (!fs.existsSync(dbdir)) {
    fs.mkdirSync(dbdir)
  }
}


module.exports = {
  createDbFolderIfNotExist
}