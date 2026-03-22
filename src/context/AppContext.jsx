
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';


axios.defaults.baseURL = import.meta.env.VITE_BASE_URL ;

export const AppContext = createContext();

const currency = import.meta.env.VITE_CURRENCY;

export const AppProvider = ({children})=>{
const navigate = useNavigate();
const [token, setToken] = useState(localStorage.getItem('token') || null);
const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
const [isOwner, setIsOwner] = useState(localStorage.getItem('isOwner') === 'true' || false);
const [showLogin, setShowLogin] = useState(false);
const [pickupDate, setPickupDate] = useState('');
const [returnDate, setReturnDate] = useState('');
const [car, setCar] = useState([]);


// Function to check if user is authenticated
    const fetchUser =async()=>{
        try {
          const {data}=  await axios.get('/api/user/data');
               if(data.success){
                setUser(data.user)
                setIsOwner(data.user.role === 'owner');
               }
               else{
                navigate('/');
               }
        } catch (error) {
            toast.error(error.message);
        }
    }
// Function to fetch all teh cars from the server
const fetchCars = async()=>{
    try {
        const {data} = await axios.get('/api/user/cars')
        data.success ? setCar(data.cars) : toast.error('data.message');
    } catch (error) {
        toast.error(error.message);
    }
}
// Function to logout the user
const logout = () =>{
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    setIsOwner(false);
    navigate('/');
    axios.defaults.headers.common['Authorization'] = '';
    toast.success('You Have Been Logged Out');
}
 // UseEffect to retrieve the token from the local storage and fetch user data
useEffect(()=>{
        const token = localStorage.getItem('token');
        setToken(token);
        fetchCars()
},[])
// useEffect to fetch user data when token available

useEffect(()=>{
        if(token){
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            fetchUser();
        }
}, [token])
    const value = {
        navigate,
        toast,
        axios,
        currency,
        token,
        setToken,
        user,
        setUser,
        isOwner,
        setIsOwner,
        showLogin,
        setShowLogin,
        pickupDate,
        setPickupDate,
        returnDate,
        setReturnDate,
        car,
        setCar
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext);
};