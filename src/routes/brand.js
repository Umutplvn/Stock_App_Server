"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/brand:

const permissions = require('../middlewares/permissions')
const brand = require('../controllers/brand')

// URL: /brands

router.route('/')
    .get(permissions.isLogin, brand.list)
    .post(permissions.isLogin, brand.create)

router.route('/:id')
    .get(permissions.isLogin, brand.read)
    .put(permissions.isLogin, brand.update)
    .patch(permissions.isLogin, brand.update)
    .delete(permissions.isLogin, brand.delete)

/* ------------------------------------------------------- */
module.exports = router