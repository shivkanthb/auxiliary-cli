const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')
const os = require('os');
const path = require('path');
const fs = require('fs');
const dbdir = os.homedir() + '/auxdb';
const configPath = path.join(dbdir, 'config.json');
const { createDbFolderIfNotExist } = require('./utils');
let db;


class Database {
  constructor() {
    createDbFolderIfNotExist();
    db = low(new FileSync(configPath))
    db.defaults({ wiki_path: '' })
      .write()
  }

  getWikiPath() {
    return db.get('wiki_path')
      .value()
  }

  setWikiPath(filepath) {
    return db.set('wiki_path', filepath)
      .write()
  }
}

module.exports ={
  Database
}