
const { outputHelpMenu } = require('../output');

const menus = {
  main: `
    aux <command>
    assist ............... GTP-3 cli assist
    iw ................... search internal wiki
    connect .............. connect services to auxiliary
    version .............. show package version
    help ................. show help menu for a command

  `,

  assist: `
    aux assist <input>
    example: aux assist display 'hello world' on the console
  `,
  
  connect: `
    aux connect <service_name>
    wiki ................... connect to internal wiki directory
  `

}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  outputHelpMenu(menus, subCmd);
}