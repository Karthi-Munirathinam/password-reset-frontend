import React, { useEffect } from 'react'
import axios from './Connection';
function Homepage() {
    useEffect(() => {
        const getdata = async () => {
            let token = window.localStorage.getItem("app-token");
            let data = await axios.get('/user', {
                headers: {
                    "authorization": token,
                    "Content-type": "application/json"
                }
            })
            console.log(data.data)
        }
        getdata();
    }, [])
    return (
        <div>

        </div>
    )
}

export default Homepage
