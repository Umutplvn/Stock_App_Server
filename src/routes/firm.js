"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/firm:

const permissions = require('../middlewares/permissions')
const firm = require('../controllers/firm')

// URL: /firms

router.route('/')
    .get(permissions.isLogin, firm.list)
    .post(permissions.isLogin, firm.create)

router.route('/:id')
    .get(permissions.isLogin, firm.read)
    .put(permissions.isLogin, firm.update)
    .patch(permissions.isLogin, firm.update)
    .delete(permissions.isLogin, firm.delete)

/* ------------------------------------------------------- */
module.exports = router