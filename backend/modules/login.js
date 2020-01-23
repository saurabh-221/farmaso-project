const connection = require('../connection/connection');
const becrypt = require('bcryptjs');

const checkUser = (request, response) => {
    const user = request.body;
    connection.query(`select * from User where User_Name = "${user.User_Name}"`, (error, result) => {
        if (error) throw error;
        if (result.length) {
            if (becrypt.compareSync(user.Password, result[0].Password)) {
                addToSessionTable(result[0]);
                response.send(JSON.stringify({ msg: `Login successful`, id: result[0].User_Id }));
            } else {
                response.send(JSON.stringify({msg:"Invalid password"}));
            }
        } else {
            response.send(JSON.stringify({msg:"Invalid user name"}));
        }
    })
}

const addToSessionTable = (data) => {
    connection.query(`insert into Session values ("${data.User_Id}", "${data.User_Name}", "${data.Password}")`, (error, result) => {
        if (error) throw error;
        console.log('added');
    })
}

const deleteSession = (request, response) => {
    const id = request.body.User_Id;
    connection.query(`delete from Session where User_Id = "${id}"`, (error, result) => {
        if (error) throw error;
        console.log('delete');
        response.send(JSON.stringify({msg:'deleted'}))
    })
}

module.exports = {
    checkUser,
    deleteSession
}