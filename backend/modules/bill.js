const connection = require('../connection/connection');

const generateBill = (request, response) => {
    const Bill_Id = request.params.id;
    connection.query(`select * from Bill where Bill_Id = "${Bill_Id}" `, (error, result) => {
        if(error) throw error;
        response.send(result);
    })
}

module.exports = {
    generateBill,
}