let fs = require('fs');

module.exports = {
    file: (req, res, next) => {
        let responseType = req.header('ResponseType');
        fs.readFile(`src/files/${req.params.date}/${req.params.name}`, { encoding: responseType }, function(err,fdata){
            if(err) console.log(err);
            
            if(responseType=='base64'){
                let data =  `data:image/jpeg;base64, ${fdata}`;
                res.send(data);
            }else{
                res.contentType = 'image/jpeg';
                res.end(fdata);
            } 
            next();
        }); 
    },
    upload:(req, res, next) => {
        res.send({
          code: 'success',
          info: req.info,
          message: 'file upload end!',
        });
        next();
    }
}