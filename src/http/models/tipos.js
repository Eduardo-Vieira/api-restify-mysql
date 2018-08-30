const db = require('../../service/mysql')

const tiposModel = {
    pesquisar:(param) => {
        return new Promise((resolve,reject) => {
            //query   
            let sql = "Select * from tb_tipos"
            //execulta sql
            db.query(sql,(error, results, fields)=>{
                if (error) { reject(error) }
                resolve({tipos: results})
            })
        })
    }
}

module.exports = tiposModel