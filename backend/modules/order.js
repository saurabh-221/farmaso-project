const connection = require('../connection/connection');

const getUserOrder = (request, response) => {
    const User_Id = request.params.id;
    connection.query(`select * from Ordertable where User_Id = "${User_Id}"`, (error, result) => {
        if (error) throw error;
        response.send(JSON.stringify(result));
    })
}

const checkAvilability = (request, response) => {
    const Item_Id = request.params.id;
    connection.query(`select Available from Product where Item_Id = "${Item_Id}"`, (error, result) => {
        if(error) throw error;
        response.send(JSON.stringify(result));
    })
}

const addOrder = (request, response) => {
    const { User_Id, Item_Id, Lender_Id, Item_Name, Cost, Phone, Address } = request.body
    connection.query(`insert into Ordertable values ("${Item_Id}", "${User_Id}", "${Lender_Id}", "${Item_Name}", ${Cost}, "successful", ${Phone}, "${Address}")`, (error, result) => {
        if (error) throw error;
        connection.query('update Product set Available = "no" where Item_Id = "'+Item_Id+'"', (error, innerResult) => {
            if(error) throw error;
            console.log(innerResult);
        })
        connection.query(`delete from Cart where Item_Id = "${Item_Id}" and User_Id = "${User_Id}"`, (error, innerResult) => {
            if(error) throw error;
            console.log(innerResult);
        })
        response.send(JSON.stringify(result));
    })
}

const cancelUserOrder = (request, response) => {
    const User_Id = request.params.id;
    const { Item_Id } = request.body;
    connection.query(`update Ordertable set status = "canceled" where Item_Id = "${Item_Id}" and User_Id = "${User_Id}"`, (error, result) => {
        if (error) throw error;
        connection.query('update Product set Available = "yes" where Item_Id = "'+Item_Id+'"', (error, innerResult) => {
            if(error) throw error;
            console.log(innerResult)
        })
        response.send(JSON.stringify(result));
    })
}

module.exports = {
    getUserOrder,
    checkAvilability,
    addOrder,
    cancelUserOrder,
}