import db from '../models/index'
import CRUDService from '../services/CRUDservice'
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll()
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        })
    } catch (error) {
        console.log(error)
    }
}
let getCRUD = (req, res) => {
    return res.render('crud.ejs')
}
let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body)
    let data = await CRUDService.getAllUser()
    return res.render('display-CRUD.ejs', { data })
}
let displayCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser()
    return res.render('display-CRUD.ejs', { data })
}
let getEditCRUD = async (req, res) => {
    let userId = req.query.id
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId)

        res.render('edit-CRUD.ejs', { user: userData })
    }
    else {
        res.send("User not found")
    }
}
let putCRUD = async (req, res) => {
    let data = req.body
    let allUsers = await CRUDService.updateUserData(data)
    return res.render('display-CRUD.ejs', {
        data: allUsers
    })
}
let deleteCRUD = async (req, res) => {
    let id = req.query.id
    if (id) {
        await CRUDService.deleteUserById(id)
        return res.send("Delete successful")
    }
    else {
        return res.send("User not found")
    }
}
module.exports = {
    getHomePage,
    getCRUD,
    postCRUD,
    displayCRUD,
    getEditCRUD,
    putCRUD,
    deleteCRUD,
}