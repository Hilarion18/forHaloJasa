const express = require('express')
const Model = require('../models/index')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

class UserController {
  static getAll(req,res) {
    Model.User.findAll()
    .then((users) => {
        res.status(200).json({
            users
        })
    })
    .catch((err) => {
        res.status(404).json({
            message: 'Data not found'
        })
    })
  }

  static register(req,res) {
    // console.log("SINI", req.body)
    Model.User.create({
        username: req.body.username,
        full_name: req.body.full_name,
        email: req.body.email,
        mobile_phone: req.body.mobile_phone,
        password: req.body.password
    })
    .then((users) => {
        // console.log("MASUK BRO")
        res.status(201).json({
            users
        })
    })
    .catch((err) => {
        console.log(err);
        res.status(401).json({
            message: 'Data not corrected'
        })
    })
  }

  static login(req,res) {
    // console.log(req.body.email);
    Model.User.findOne({where: {
        email: req.body.email,
    }})
    .then((user) => {
        if (bcrypt.compareSync(req.body.password, user.password) === true ) {
            const token = jwt.sign({user}, process.env.JWT_SECRET)
            res.status(201).json({
                user: user,
                token: token
            })
        }
        else {
            let err = {
                message: 'Username or password wrong'
            }
            res.status(400).json(err)
        }
    })
    .catch((err)=> {
        // console.log(err)
        res.status(400).json({
            message: err.message
        })
    })
  }

  static getOne(req,res) {
    Model.User.findOne({where: {id: req.params.id}})
    // Model.User.findOne({where: {username: req.params.id}})
    .then((user) => [
        res.status(200).json({
            user
        })
    ])
    .catch((err) => {
        res.status(401).json({
            message: `Data not found`
        })
    })
  }

  static createUser(req,res){
    console.log(req.body);
    Model.User.create(req.body)
    .then((user) => {
        console.log(user);
        res.status(201).json({
            user
        })
    })
    .catch((user) => {
        res.status(401).json({
            message: `data error`
        })
    })
  }

  static delete(req,res) {
    Model.User.destroy({where: {id: req.params.id}})
    .then(() => {
        res.status(200).json({
            message: `data has been deleted`
        })
    })
    .catch((err) => {
        res.status(400).json({
            message: `data not found`
        })
    })
  }

  static update(req,res) {
    Model.User.update({where: {id: req.params.id}})
    .then((user) => {
        res.status(200).json({
            user
        })
    })
    .catch((err) => {
        res.status(400).json({
            message: `data not found`
        })
    })
  }
 }


module.exports = UserController