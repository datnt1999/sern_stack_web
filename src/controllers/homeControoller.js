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
    console.log(message)
    return res.send('Post CRUD from server')
}
let displayCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser()
    console.log(data)
    return res.render('display-CRUD.ejs', { data })
}
module.exports = {
    getHomePage,
    getCRUD,
    postCRUD,
    displayCRUD,
}