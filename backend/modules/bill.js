const connection = require('../connection/connection');

const generateBill = (request, response) => {
    const User_Id = request.params.id;
    const { Item_Id } = request.body;
    connection.query(`select * from Ordertable join User on Ordertable.User_Id = User.User_Id where Item_Id = "${Item_Id}" and User_Id = "${User_Id}"`, (error, result) => {
        if(error) throw error;
        response.download(result, 'bill.pdf');
    })
}

module.exports = {
    generateBill,
}