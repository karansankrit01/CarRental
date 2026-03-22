import express from 'express'
import {protect} from "../middleware/auth.js"
import upload from "../middleware/multer.js"
import {changeRoleToOwner, addCar, getOwnerCars, toggleCarAvailability, deleteCar, getDashBoardData, updateUserImage} from "../controllers/ownerController.js"
const ownerRouter= express.Router();

ownerRouter.post('/change-role', protect, changeRoleToOwner)
ownerRouter.post('/add-car', upload.single("image"), protect, addCar)
ownerRouter.get('/cars', protect, getOwnerCars)
ownerRouter.post('/toggle-car', protect, toggleCarAvailability)
ownerRouter.post('/delete-car', protect, deleteCar)


ownerRouter.get('/dashboard', protect , getDashBoardData)
ownerRouter.post('/updateImage', upload.single('image'),protect , updateUserImage)
export default ownerRouter;