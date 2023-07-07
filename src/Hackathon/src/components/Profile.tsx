import * as React from 'react';
import { Component,useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function Profile(props:any) {
    const [frd, setFrd] = useState([]);
    console.log("profile")

useEffect(()=>{
  Fetchfrd();
},[])

    const Fetchfrd = async () => {
        const { id } = useParams<{ id: string }>();
        try {
          const response = await axios.get(`http://localhost:3002/friends/${id}`);
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
                <p>{item.dateofbirth}</p>
<p>{item.gender}</p>
<p>{item.address}</p>
<p>{item.MobileNumber}</p> 
<Link to="/login" className='link-color'><button>Add</button></Link>




            </div>
            <div>
               

            </div>


        </div>
    )

})
}
</div>

</>);
}

export default Profile;