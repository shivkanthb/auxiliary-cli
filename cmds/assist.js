const request = require('../utils/request');
const { consoleOutput, consoleError } = require('../output');
const ora = require('ora');
const spinner = ora('Fetching..')

const API_URL = 'https://pioneer-copilot-api.herokuapp.com/api/davinci';


module.exports = async (args) => {
  // args._[0] is 'a'
  let user_input = args._.slice(1).join(' ');
  // console.log('user input: ', user_input);
  try {
    let options = {
      url: API_URL,
      qs: {
        q: user_input
      }
    };
    spinner.start();
    let { response, body } = await request.get(options);
    spinner.stop();
    consoleOutput(body.trim());
  } catch(err) {
    consoleError(err);
  }
}