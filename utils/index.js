const fs = require('fs');
const dbdir = os.homedir() + '/auxdb';


function createDbFolderIfNotExist() {
  if (!fs.existsSync(dbdir)) {
    fs.mkdirSync(dbdir)
  }
}


module.exports = {
  createDbFolderIfNotExist
}