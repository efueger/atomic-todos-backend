const path = require('path');
const camelCase = require('uppercamelcase');
const fileSystem = require('fs');

module.exports = (app, logger) => (folderName, loadAction) => {

  const removeJsExtension = (fileName) => fileName.replace('.js', '');
  const folderPath = path.join(process.cwd(), folderName);

  const defaultLoadAction = (app, loadedModule, fileName) => {
    logger.info(`${folderName}: ${fileName}`);
    app[folderName] = app[folderName] || {};
    app[folderName][fileName] = loadedModule;
  };

  const loader = loadAction || defaultLoadAction;

  fileSystem.readdirSync(folderPath).forEach( file => {
    const fileName = camelCase(removeJsExtension(file));
    const loadedModule = require(path.join(folderPath, file));
    loader(app, loadedModule, fileName);
  });
};
