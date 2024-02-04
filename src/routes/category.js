"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/category:

const permissions = require('../middlewares/permissions')
const category = require('../controllers/category')

// URL: /categories

router.route('/')
    .get(permissions.isLogin, category.list)
    .post(permissions.isLogin, category.create)

router.route('/:id')
    .get(permissions.isLogin, category.read)
    .put(permissions.isLogin, category.update)
    .patch(permissions.isLogin, category.update)
    .delete(permissions.isLogin, category.delete)

/* ------------------------------------------------------- */
module.exports = router