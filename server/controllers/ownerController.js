import User from "../model/User";


export const changeRoleToOwner=async(res, rep)=>{
        try {
            const {_id} = req.user;
            await User.findByIdAndUpdate(_id,{role:"owner"})
            res.json({success:true, message:"Now you ca list cars"})
        } catch (error) {
            console.long(error.message);
            res.json({success:false, message: error.message})
        }
}