import React,{useState,useEffect} from 'react';
import axios from 'axios'

function Api() {
    return axios.get('http://private-anon-13e834fbd8-lampshop.apiary-mock.com/lamps')
    .then(response => {
            return response.data
            })

    .catch(error => {
     throw error;
     });

};

export default Api