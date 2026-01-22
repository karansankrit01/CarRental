import User from "../model/User.js";
import fs from 'fs';
import imagekit from '../config/imageKit.js'
import Car from '../model/Car.js'

// Api to change the role of user
export const changeRoleToOwner=async(req, res)=>{
        try {
            const {_id} = req.user;
            await User.findByIdAndUpdate(_id,{role:"owner"})
            res.json({success:true, message:"Now you ca list cars"})
        } catch (error) {
            console.log(error.message);
            res.json({success:false, message: error.message})
        }
}

// API to list car
export const addCar =async(req, res)=>{
    try {
        const {_id} = req.user;
        let car = JSON.parse(req.body.carData)
        const imageFile = req.file;

        // Upload image to imageKit
        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: '/cars'
        })

        // Optimization through imageKit URL transformation
        const imageURL = imagekit.url({
            path: response.filePath,
            transformation: [
                {width: 1280}, //Width resizing
                {quality: 'auto'}, // Auto Compression
                {format: 'webp'} // convert to modern format
            ]
        });

        const image = imageURL;
        await Car.create({...car, owner: _id, image})
        res.json({success: true, message: "Car Added"})
        



    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}