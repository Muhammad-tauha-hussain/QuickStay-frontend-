import axios from "axios";
import { useContext } from "react";
import { createContext } from "react";
import { useNavigate } from 'react-router-dom'
import { useUser, useAuth } from '@clerk/clerk-react'
import { useState } from "react";
import {toast} from 'react-hot-toast'
import { useEffect } from "react";
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL

const Appcontext = createContext()

export const AppProvider = ({ children }) => {

    const currency = import.meta.env.VITE_CURRENCY || "$"
    const navigate = useNavigate()
    const { user } = useUser()
    const { getToken } = useAuth()
    const [isOwner, setIsOwner] = useState(false)
    const [showHotelReg, setShowHotelReg] = useState(false)
    const [searchedCity, setSearchedCity] = useState([])
    const fetchUser = async () => {

        try {
            const { data } = await axios.get('/api/user', { headers: { Authorization: `Bearer ${await getToken()}` } })
            if (data.success) {
                setIsOwner(data.role === "hotelOwner")
                setSearchedCity(data.recentSearchedCities)
            } else {
                setTimeout(() => fetchUser(), 5000)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        if (user) {
            fetchUser()
        }
    })
    const value = {
        currency, navigate, user, getToken, isOwner, setIsOwner, axios, showHotelReg, setShowHotelReg , searchedCity , setSearchedCity
    }
    return (
        <Appcontext.Provider value={value}>
            {children}
        </Appcontext.Provider>
    )
}

export const useAppContext = () => useContext(Appcontext)