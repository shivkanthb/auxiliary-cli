
const { outputHelpMenu } = require('../output');

const menus = {
  main: `
    aux <command>
    a .................... GTP-3 cli assist
    connect .............. connect services to auxiliary
    version .............. show package version
    help ................. show help menu for a command

  `,

  a: `
    aux a <input>
    Example: Display 'hello world' on the console
  `,
  
  connect: `
    aux connect <service_name>
    gcal ................... connect google calendar
    gdrive ................. connect  gdrive
  `

}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  outputHelpMenu(menus, subCmd);
}