const prompts = require('prompts');

module.exports =  async (args, db) => {
  let service = args._[1];
  switch(service) {
    case 'wiki':
      console.log('Lets connect wiki');
      const response = await prompts({
        type: 'text',
        name: 'wiki_path',
        message: 'Provide your internal wiki directory path'
      });
      if (response.wiki_path) {
        db.setWikiPath(response.wiki_path);
      }
      break;
    default:
      console.log(`${service} type unavailable to connect`);
  }
}