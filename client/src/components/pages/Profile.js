import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Profile = () => {
    const [myData, setMyData] = useState([])

    const divBody = {
        border : "1px solid black",
        background: "#222",
        color: "#fff",
        bottom: 0,
        padding: "1rem",
        margin: 0,
        width: "100%",
        opacity: ".5"
    }
    useEffect(() => {
        axios.get("http://localhost:4000/api/v1/users")
            .then((res) => {
                console.log(res.data)
                setMyData(res.data.data)
            }).catch((err) => {
                console.log(err)
            })
    }, []);

    return (
        <div className="text-center">
            
            {
                myData.map((member) => {
                    const { name, email, date } = member;
                    return (
                        <div className="text-center" key={member._id}>
                            <div style={divBody}>
                                <h4>Name : {name}, email : {email}</h4>
                            </div>
                        </div>
                    )
                })
            }
            <Link to="/home">
                <button className="primary-button">Back</button>
            </Link>
        </div>

        
    )
}

export default Profile
