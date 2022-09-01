import bcrypt from 'bcryptjs'
import db from '../models/index'
const salt = bcrypt.genSaltSync(10);
let createNewUser = async (data) => {
    return new Promise(async (reslove, reject) => {
        try {
            let hashPassword = await hashUserPassWord(data.password)
            await db.User.create({
                email: data.email,
                password: hashPassword,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phone,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId,
            })
            reslove('Create user succeed')
        } catch (error) {
            reject(error)
        }
    })
}
let hashUserPassWord = (password) => {
    return new Promise(async (reslove, reject) => {
        try {
            let hash = bcrypt.hashSync(password, salt);
            reslove(hash)
        } catch (error) {
            reject(error)
        }
    })
}
let getAllUser = () => {
    return new Promise(async (reslove, reject) => {
        try {
            let users = db.User.findAll({
                raw: true,
            });
            reslove(users)
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    createNewUser,
    getAllUser,
}