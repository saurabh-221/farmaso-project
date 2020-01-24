const connection = require('../connection/connection');

const getUserOrder = (request, response) => {
    const User_Id = request.params.id;
    connection.query(`select * from Ordertable where User_Id = "${User_Id}"`, (error, result) => {
        if (error) throw error;
        response.send(JSON.stringify(result));
    })
}

const cheackAvilability = (request, response) => {
    const Item_Id = request.body.Item_Id;
    connection.query(`select Available from Product where Item_Id = ${Item_Id}`, (error, result) => {
        if(error) throw error;
        response.send(JSON.stringify(response));
    })
}

const addOrder = (request, response) => {
    const { User_Id, Item_Id, Lender_Id, Item_Name, Cost } = request.body
    connection.query(`insert into Ordertable values ("${Item_Id}", "${User_Id}", "${Lender_Id}", "${Item_Name}", ${cost}, "sucess")`, (error, result) => {
        if (error) throw error;
        connection.query('update table Product set Available = "no" where Item_Id = "'+Item_Id+'"', (error, result) => {
            if(error) throw error;
            console.log(result);
        })
        response.send(JSON.stringify(response));
    })
}

const cancelUserOrder = (request, response) => {
    const User_Id = request.params.id;
    const { Item_Id } = request.body;
    connection.query(`update table Ordertable set Status = "canceled" where Item_Id = "${Item_Id}" and User_Id = "${User_Id}"`, (error, result) => {
        if (error) throw error;
        connection.query('update table Product set Available = "yes" where Item_Id = "'+Item_Id+'"', (error, result) => {
            if(error) throw error;
            console.log(result)
        })
        response.send(JSON.stringify(result));
    })
}

module.exports = {
    getUserOrder,
    addOrder,
    cancelUserOrder,
}