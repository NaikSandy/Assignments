import * as React from 'react';
import { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Login.css";
function Home() {

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
                           
                           <Link to="/login"><button>Add</button></Link> 
                            <Link to={`/profile/${item.id}`} className='link-color'><button >see profile</button></Link>

                        </div>


                    </div>
                )

            })
            }


        </div>

    </>);
}

export default Home;