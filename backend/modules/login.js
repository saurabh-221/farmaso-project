const connection = require('../connection/connection');
const becrypt = require('bcryptjs');

const checkUser = (request, response) => {
    const user = request.body;
    connection.query(`select * from User where User_Name = "${user.User_Name}"`, (error, result) => {
        if (error) throw error;
        if (result.length) {
            if (becrypt.compareSync(user.Password, result[0].Password)) {
                addToSessionTable(result[0]);
                response.send(`Login successful ${result[0].User_Id}`);
            } else {
                response.send("Invalid password");
            }
        } else {
            response.send("Invalid user name");
        }
    })
}

const addToSessionTable = (data) => {
    console.log(data)
    connection.query(`insert into Session values (${data.User_Id}, "${data.User_Name}", "${data.Password}")`, (error, result) => {
        if(error) throw error;
        console.log('added');
    })
}

const deleteSession = (request, response) => {
    const id = request.body.Item_Id;
    connection.query(`delete from Session where User_Id = ${id}`, (error, result) => {
        if(error) throw error;
        console.log('delete');
    })
}

module.exports = {
    checkUser,
    deleteSession
}