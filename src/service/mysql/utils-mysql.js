module.exports = {
    insert: ( table, data ) => {
        let key = Object.keys(data);
        let colum = '';
        let values = '';
        for (let i in key) {
            colum = (i > 0) ? colum.concat(',',key[i]): colum.concat(key[i]);
            values = (i > 0) ? values.concat(',',"'",data[key[i]],"'"): values.concat("'",data[key[i]],"'");
        }
    
        let sql = `INSERT INTO ${table} (${colum}) VALUES (${values})`;
        return sql;
    },
    update: (table, data, where ) => {
        let key = Object.keys(data);
        let values = '';
        for (let i in key) {
            values = (i > 0) ? values.concat(',',key[i],"=","'",data[key[i]],"'") : values.concat(key[i],"=","'",data[key[i]],"'");
        }
    
        let sql = `UPDATE ${table} SET ${values} WHERE ${where}`;
        return sql; 
    },
    where:(data)=>{
        let key = Object.keys(data);
        let values = '';
        for (let i in key) {
        values = (i > 0) ? values.concat(' AND ',key[i],"=","'",data[key[i]],"'") : values.concat('WHERE ',key[i],"=","'",data[key[i]],"'");
        }
        return values;
    },
    whereAnd:(data)=>{
        let key = Object.keys(data);
        let values = '';
        for (let i in key) {
        values = (i > 0) ? values.concat(' AND ',key[i],"=","'",data[key[i]],"'") : values.concat(key[i],"=","'",data[key[i]],"'");
        }
        return values;
    }
}