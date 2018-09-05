const Users = require('../models/user')

exports.getAllUsers = (request, response) => {
    var query = Users.find()
    console.log(request.query)
    query.exec((error, users) => {
        if (error)
            response.json({
                error: error,
                status: 500
            })
        response.json(users)
    })
}

exports.postNewUsers = (request, response) => {
    console.log(request.body)
    let user = new Users({
        username: request.body.username,
        email: request.body.email,
        password: request.body.password,
        passwordExpiry: request.body.passwordExpiry,
        firstName: request.body.firstName,
        middleName: request.body.middleName,
        lastName: request.body.lastName,
        facebook: request.body.facebook,
        google: request.body.google,
        token: request.body.token,
        photo: request.body.token,
        createdAt: request.body.createdAt,
        updatedAt: request.body.updatedAt
    })
    user.save().then((user) => {
        console.log('User Added Successfully')
        response.json(user)
    })
}

exports.updateUsersById = (request, response) => {
        const {
            username,
            email,
            password,
            passwordExpiry,
            firstName,
            middleName,
            lastName,
            facebook,
            google,
            token,
            photo,
            createdAt,
            updatedAt
        } = request.body

        Users.updateOne({
                    _id: request.params.id,
                },
                {
                    username,
                    email,
                    password,
                    passwordExpiry,
                    firstName,
                    middleName,
                    lastName,
                    facebook,
                    google,
                    token,
                    photo,
                    createdAt,
                    updatedAt
                },

                {},

                (error, space) => {
                    if (error)
                        response.json({
                            error: error,
                            status: 500
                        })
                    response.json(Users)
                })
    }

    exports.delUsersById = (request, response) => {
    Users.findOneAndDelete({
        _id: request.params.id
    }, (error, deleteId) => {
        if (error)
            response.json({
                error: error,
                status: 500
            })
        response.json({
            message: "deleted successfully"
        })
    })

}