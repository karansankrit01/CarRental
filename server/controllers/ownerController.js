import User from "../model/User.js";
import fs from 'fs';
import imagekit from '../config/imagekit.js';
import Car from '../model/Car.js'
import Booking from "../model/Booking.js";

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
        res.json({success:true, cars})

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

// Api to toggle Car Availability

export const toggleCarAvailability = async (req, res) => {
    try {
        const {_id} = req.user;
        const {carId} = req.body;
        const car = await Car.findById(carId);

        // Checking if car belongs to the user
        if(car.owner.toString() !== _id.toString()) {
            return res.json({success: false, message: "Unauthorized"});
        }
        car.isAvailable = !car.isAvailable;
        await car.save();

        res.json({success: true, message: "Availability Toggled"});

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}

// Api to delete car
export const deleteCar = async (req, res) => {
    try {
        const {_id} = req.user;
        const {carId} = req.body;
        const car = await Car.findById(carId);

        // Checking if car belongs to the user
        if(car.owner.toString() !== _id.toString()) {
            return res.json({success: false, message: "Unauthorized"});
        }
        car.owner = null;
        car.isAvailable = false;
        await car.save();

        res.json({success: true, message: "Car Deleted"});

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
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
        const bookings = await Booking.find({owner : _id}).populate("car").sort({createdAt:-1})

        const pendingBookings = await Booking.find({owner : _id, status : "pending"})
        const  completeBookings= await Booking.find({owner : _id, status : "confirmed"})

        // calculate monthly revenue from the bookings where status is confirmed

        const monthlyRevenue = bookings.slice().filter(booking => booking.status === "confirmed").reduce((acc, booking)=> acc+ booking.price,0);

        const dashboardData = {
            totalCars : cars.length,
            totalBookings : bookings.length,
            pendingBookings: pendingBookings.length,
            completedBookings : completeBookings.length,
            recentlyBookings : bookings.slice(0,3),
            monthlyRevenue
        }
        res.json({success : true , dashboardData})

    } catch (error) {
        console.log(error.message);
        res.json({success:false, message:error.message})
    }
}

// API to update user image

export const updateUserImage = async( req, res) =>{
    try {
        const {_id} = req.user;
        const imageFile = req.file;
        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file : fileBuffer,
            fileName : imageFile.originalname,
            folder:'/cars'
        })

        var OptimizedImageUrl = imagekit.url({
            path : response.filePath,
            transformation :[
               { width:'1280'},
               {quality : 'auto'},
               {format :'webp'}
            ]

        });
        const image = OptimizedImageUrl;
        await User.findByIdAndUpdate(_id, {image});

        res.json({success :true , message : 'Image Updated'})

    } catch (error) {
        console.log(error.message);
        res.json({success:false, message:error.message})
    }
}