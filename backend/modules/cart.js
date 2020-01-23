const connection = require('../connection/connection');

const getCartItemsByUserId = (request, response) => {
    const user = request.params.id;
    connection.query(`select * from Cart where User_Id = "${user}"`, (error, result) => {
        if (error) throw error;
        response.send(JSON.stringify(result));
    });
}

const addCartItemByUserId = (request, response) => {
    const cartItem = request.body;
    connection.query(`select * from Cart where User_Id = "${cartItem.User_Id}" and Item_Id = "${cartItem.Item_Id}"`, (error, result) => {
        if (error) throw error;
        if (!result.length) {
            connection.query(`insert into Cart values ("${cartItem.Item_Id}", "${cartItem.User_Id}", "${cartItem.Vender_Id}", "${cartItem.Item_Name}", ${cartItem.PerHourCharge}, ${cartItem.Hours})`, (error, result) => {
                if (error) throw error;
                response.send(JSON.stringify(result));
            })
        } else {
            response.send(JSON.stringify({msg: "Item already added"}))
        }
    });
}

const deleteCartItemByUserId = (request, response) => {
    const cartItem = request.body;
    connection.query(`delete from Cart where User_Id = "${cartItem.User_Id}" and Item_Id = "${cartItem.Item_Id}"`, (error, result) => {
        if(error) throw error;
        response.send(JSON.stringify(result))
    });
}

module.exports = {
    getCartItemsByUserId,
    addCartItemByUserId,
    deleteCartItemByUserId
}