const util = require('util');
const prompts = require('prompts');
const exec = util.promisify(require('child_process').exec);
const child_process = require('child_process')
const editor = 'less';


const readFilePaths  = (response) => {
  let lines = response.trim().split('\n');
  return lines;
}

module.exports = async (args, db) => {
  let user_input = args._.slice(1).join(' ');
  let iw_path = db.getWikiPath();
  if (!iw_path) {
    console.log('Internal wiki directory path is empty! connect one with `aux connect wiki`');
    return;
  }
  let exec_str = `grep -Ril '${user_input}' ${iw_path}`;
  let results = null;
  try {
    const { stdout, stderr } = await exec(exec_str);
    if (stderr.message) throw stderr;
    console.log();
    results = readFilePaths(stdout);
  } catch(err) {
    return null;
  }

  let onCancel = () => {
    return true;
  }

  if (results.length == 1) {
    child_process.spawn(editor, [results[0]], {
        stdio: 'inherit'
    });
    return;
  }

  let choice_map = results.map((file) => {
    return {
      title: file,
      value: file
    }
  });

  let response = await prompts({
    type: 'select',
    name: 'intern_search',
    message: `${user_input} present in files`,
    choices: choice_map
  }, {
    onCancel
  });

  if (response.intern_search) {
    let child = child_process.spawn(editor, [response.intern_search], {
        stdio: 'inherit'
    });
    
    child.on('exit', function (e, code) {
        // console.log("finished");
    });
  }
  return;
}