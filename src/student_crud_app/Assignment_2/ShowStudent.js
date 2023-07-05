import React, { useState ,useContext, useEffect} from 'react';
import axios from 'axios';
import "./styles.css";
import AddStudentComponent from './AddStudentComponent';
import {Link } from 'react-router-dom';
import EditComponent from './EditComponent';


function ShowStudent() {
  const [students, setStudents] = useState([]);
  const [editstudent,setEditstudent]=useState(null);

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
      const handleEdit=(id)=>{
        setEditstudent(id)
      }

      const handleupdate = (updatedStudent) => {
        setStudents((prevStudents) => {
          return prevStudents.map((item) => {
            if (item.id === updatedStudent.id) {
              return updatedStudent;
            }
            return item;
          });
        });
        setEditstudent(null);
      };
    
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
{
  editstudent===item.id?(
    <EditComponent student={item} Update={handleupdate}/>
  ):(
  
  
 <>
<button onClick={()=>handleEdit(item.id)}>Edit</button>
  <button onClick={()=>handleDelete(item.id)}>Delete</button>
  </>
       )}
</div>


</div>
)

      })
      }
   </div> 

    </> );
}

export default ShowStudent;