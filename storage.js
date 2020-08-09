const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')
const os = require('os');
const path = require('path');
const fs = require('fs');
let dbdir = os.homedir() + '/auxdb';
let configPath = path.join(dbdir, 'config.json');
let db;


class Database {
  constructor() {
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