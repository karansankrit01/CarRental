import User from "../model/User.js";
import fs from 'fs';
import imagekit from '../config/imagekit.js';
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
// api to list owner cars
export const getOwnerCars = async(req, res)=>{
    try {
        const {_id} = req.user;
        const cars= await Car.find({owner : _id})
        re.json({success:true, cars})

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

// Api to toogle Car Availability

export const toggleCarAvailability = async (res, req)=>{
    try {
        const {_id} = req.user;
        const {carId} = req.body
        const car= await Car.find({owner:_id})

        // Checking is car belongs to the user
        if(car.owner.toString()!== _id.toString()){
            res.json({success:false,message:"Unauthorized"});
        }
        car.isAvaliable = !car.isAvaliable;
        await car.save()

        res.json({success:true, message:"Availability Toggled"})

    } catch (error) {
        console.log(ErrorEvent.message)
        res.json({suucess:false, message: error.message})
    }
}

// Api to delete car
export const deleteCar = async (res, req)=>{
    try {
        const {_id} = req.user;
        const {carId} = req.body
        const car= await Car.find({owner:_id})

        // Checking is car belongs to the user
        if(car.owner.toString()!== _id.toString()){
            res.json({success:false,message:"Unauthorized"});
        }
        car.owner=null;
        car.isAvaliable=false;
        await car.save()

        res.json({success:true, message:"Availability Toggled"})

    } catch (error) {
        console.log(ErrorEvent.message)
        res.json({suucess:false, message: error.message})
    }
}

// API to get DashBoard Data

export const getDashBoardData = async (req, res) =>{
    try {
        const {_id, role} = req.user;

        if(role !== "owner"){
            return res.json({success:false, message:"Unauthorized"});
        }

        const cars = await Car.find({owner: _id})
    } catch (error) {
        console.log(error.message);
        res.json({suucess:false, message:error.message})
    }
}