import React, { useState ,useContext, useEffect} from 'react';
import axios from 'axios';
import "./styles.css";
import AddStudentComponent from './AddStudentComponent';
import {Link } from 'react-router-dom';


function ShowStudent() {
  const [students, setStudents] = useState([]);

  useEffect(()=>{
    fetchStudents();
  },[])

    const fetchStudents = async () => {
      
        try {
          const response = await axios.get('http://localhost:3005/students');
         console.log(response.data);
         setStudents(response.data);
       
        } catch (error) {
          console.error('Error fetching students:', error);
        }
      };
      // fetchStudents();

      const handleupdate=()=>{
        return(
         <></>
        )

      }
      const handleDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:3005/students/${id}`);
          fetchStudents(); // Refresh the list after deletion
        } catch (error) {
          console.error('Error deleting student:', error);
        }
      };

    return ( <>
     
    <div className='card'> 




       { students.map((item)=>{
return(
    <div className="Card-div">
<div key={item.id}>
<h3>{item.name}</h3>
<p>{item.dateofbirth}</p>
<p>{item.gender}</p>
<p>{item.address}</p>
<p>{item.MobileNumber}</p>
{console.log(item,"item")}
</div>
<div>
<Link to="/Add-student" className='link-color'><button>Edit</button></Link>
  <button onClick={()=>handleDelete(item.id)}>Delete</button>
</div>


</div>
)

      })
      }
   </div> 

    </> );
}

export default ShowStudent;