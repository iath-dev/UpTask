const { request, response } = require('express')

exports.projectHome = (req = request, res = response) => {
    res.status(200).render('index')
}