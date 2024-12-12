import React,{useState,useEffect} from 'react';
import axios from 'axios'

const API_URL = 'https://private-anon-c97e9f209d-lampshop.apiary-mock.com/lamps';
const Api = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
        console.log(response.data)
    }
    catch(error) {
         throw error;
         };

    };


export default Api