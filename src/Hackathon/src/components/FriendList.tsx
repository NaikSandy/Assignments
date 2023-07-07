import * as React from 'react';
import { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Login.css";
function FriendList() {

    const [frd, setFrd] = useState([]);

    useEffect(() => {
        fetchfrd();
    }, [])

    const fetchfrd = async () => {

        try {
            const response = await axios.get('http://localhost:3002/friends');
            console.log(response.data);
            setFrd(response.data);
            console.log(response.data)

        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    const handleDelete = async (id:any) => {
        try {
            await axios.delete(`http://localhost:3002/friends/${id}`);
            fetchfrd();
        } catch (error) {
            console.error('Error deleting friend:', error);
        }
    };
    const handleProfile = async (id:any) => {
        try {
            await axios.get(`http://localhost:3002/friends/${id}`);
            fetchfrd();
        } catch (error) {
            console.error('Error deleting friend:', error);
        }
    };
    return (<>

        <div className='card'>




            {frd.map((item: any) => {
                return (
                    <div className="Card-div">
                        <div >
                            <h3>{item.name}</h3>
                            {/* <p>{item.dateofbirth}</p>
<p>{item.gender}</p>
<p>{item.address}</p>
<p>{item.MobileNumber}</p>  */}




                        </div>
                        <div>
                           
                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                            <Link to={`/profile/${item.id}`} className='link-color'><button >see profile</button></Link>

                        </div>


                    </div>
                )

            })
            }


        </div>

    </>);
}

export default FriendList;