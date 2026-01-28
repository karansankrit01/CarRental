// Function to check availability of Car for a given Date

import Booking from "../model/Booking.js";
import Car from "../model/Car.js";
import car from "../model/Car.js";

const checkAvailability = async (Car, pickupDate, returnDate) => {
  const booking = await Booking.find({
    car,
    pickupDate: { $lte: returnDate },
    returnDate: { $lte: pickupDate },
  });
  return booking.length === 0;
};

// Api to check availibility of cars for the given date and location
export const checkAvailabilityOfCar = async (req, res) => {
  try {
    const { location, pickupDate, returnDate } = req.body;
    // fetch all the available car for the given location
    const cars = await Car.find({ location, isAvailable: true });

    // check car availability for the given date range using promise
    const availableCarsPromises = cars.map(async (car) => {
      const isAvailable = await checkAvailability(
        car._id,
        pickupDate,
        returnDate,
      );
      return { ...car._doc, isAvailable: isAvailable };
    });

    let availableCars = await Promise.all(availableCarsPromises);
    availableCars = availableCars.filter((car) => car.isAvailable === true);

    res.json({ success: true, availableCars });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, meesage: error.meesage });
  }
};

// api to create booking

export const createBooking = async(req, res) =>{
    try {
        const {_id} = req.user;
        const {car, pickupDate,returnDate} = req.body;
        const isAvailable = await checkAvailability(Car,pickupDate,returnDate)
        if(!isAvailable){
            res.json({success:false , message:"Car is not available"})
        }
        const carData= await Car.findById(car)
        const picked = new Date(pickupDate);
        const returned = new data(returnDate);
        const noOfDays = Math.ceil((returned-picked)/(1000 * 60 * 60 * 24))
        const price = carData.pricePerDay * noOfDays;

        await Booking.create({car, owner:carData.owner, user:_id, pickupDate, returnDate, price})
        res.json({succes:true,message:"Booking Created"})
    } catch (error) {
        console.log(error.message);
        res.json({succes:false, message:error.message})

    }
}

// Api to list user booking
export const getUserBookings = async(req, res)=>{
    try {
        const {_id} = req.user;
        const bookings = (await Booking.find({user:_id}).populate("car")).toSorted({
            createdAt:-1
        }) 
        res.json({success:true, bookings})

    } catch (error) {
        console.log(error.message);
        res.json({success:false , message:error.message})
    }
}