import { Timestamp } from "bson";
import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema.Types
const carSchema= mongoose.Schema({
    owner:{type : ObjectId, ref:'User'},
    brand:{type : String, require:true},
    model:{type : String, require:true},
    image:{type : String, require:true},
    year:{type : Number, require:true},
    Category:{type : String, require:true},
    seating_capacity:{type : Number, require:true},
    feul_type:{type:String, require:true},
    transmission:{type:String, require:true},
    pricePerDay:{type:Number, require:true},
    location:{type:String, require:true},
    description:{type:String, require:true},
    isAvaliable :{type:Boolean, default:true}
},{Timestamp:true})

const Car=mongoose.model('Car', carSchema)

export default Car