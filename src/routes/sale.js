"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/sale:

const permissions = require('../middlewares/permissions')
const sale = require('../controllers/sale')

// URL: /sales

router.route('/')
    .get(permissions.isLogin, sale.list)
    .post(permissions.isLogin, sale.create)

router.route('/:id')
    .get(permissions.isLogin, sale.read)
    .put(permissions.isLogin, sale.update)
    .patch(permissions.isLogin, sale.update)
    .delete(permissions.isLogin, sale.delete)

/* ------------------------------------------------------- */
module.exports = router