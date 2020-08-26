const fs = require('fs');
const moment = require('moment');

/**
 * image upload plugin
 * require body-parser: restify.plugins.bodyParser()
 * @param {string} [options={ path: `./public/uploads` }] file upload path
 * @returns
 */
function middlewareUpload(options = { path: `./public/uploads` }) {
  const path = options.path;
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }
  function upload(req, res, next) {
    const todayDir = moment().format('YYYYMMDD');
    if (!fs.existsSync(`${path}/${todayDir}`)) {
      fs.mkdirSync(`${path}/${todayDir}`, { recursive: true });
    }
    if (req.files.file) {
      const type = req.files.file.name.split('.')
      const fileName = `/${todayDir}/${Date.now()}.${type[1]}`;
      fs.copyFileSync(req.files.file.path, `${path}${fileName}`);
      req.info = fileName; // set fileName to req.info
      next();
    }
  }
  return upload;
}

module.exports = middlewareUpload;