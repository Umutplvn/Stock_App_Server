"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/purchase:

const permissions = require('../middlewares/permissions')
const purchase = require('../controllers/purchase')

// URL: /purchases

router.route('/')
    .get(permissions.isLogin, purchase.list)
    .post(permissions.isLogin, purchase.create)

router.route('/:id')
    .get(permissions.isLogin, purchase.read)
    .put(permissions.isLogin, purchase.update)
    .patch(permissions.isLogin, purchase.update)
    .delete(permissions.isLogin, purchase.delete)

/* ------------------------------------------------------- */
module.exports = router