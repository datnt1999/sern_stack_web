import express from "express"
import homController from "../controllers/homeControoller"
let router = express.Router()

let initWebRoutes = (app) => {
    router.get('/', homController.getHomePage)
    router.get('/crud', homController.getCRUD)
    router.post('/post-crud', homController.postCRUD)
    router.get('/get-crud', homController.displayCRUD)
    router.get('/edit-crud', homController.getEditCRUD)
    router.post('/put-crud', homController.putCRUD)
    router.get('/delete-crud', homController.deleteCRUD)
    return app.use("/", router)
}
module.exports = initWebRoutes