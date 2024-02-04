"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/product:

const permissions = require('../middlewares/permissions')
const product = require('../controllers/product')

// URL: /products

router.route('/')
    .get(permissions.isLogin, product.list)
    .post(permissions.isLogin, product.create)

router.route('/:id')
    .get(permissions.isLogin, product.read)
    .put(permissions.isLogin, product.update)
    .patch(permissions.isLogin, product.update)
    .delete(permissions.isLogin, product.delete)

/* ------------------------------------------------------- */
module.exports = router