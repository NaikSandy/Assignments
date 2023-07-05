import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EditComponent= ({ student, onUpdate }) => {
    const [editedStudent, setEditedStudent] = useState({
        name: student.name,
        dob: student.dob,
        gender: student.gender,
        address: student.address,
        mobileNumber: student.mobileNumber,
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setEditedStudent({ ...editedStudent, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3005/students/${student.id}`, editedStudent)
          .then((response) => {
            console.log('Student updated successfully:', response.data);
            onUpdate(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      };
  return (
    <div>
            <div>
      <h3>Edit Student</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={editedStudent.name} onChange={handleChange} required />
        </label>
        <label>
          Date of Birth:
          <input type="date" name="dob" value={editedStudent.dob} onChange={handleChange} required />
        </label>
        <div>
          Gender:
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={editedStudent.gender === 'Male'}
              onChange={handleChange}
              required
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={editedStudent.gender === 'Female'}
              onChange={handleChange}
              required
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Don't Want to Specify"
              checked={editedStudent.gender === "Don't Want to Specify"}
              onChange={handleChange}
              required
            />
            Don't Want to Specify
          </label>
        </div>
        <label>
          Address:
          <input type="text" name="address" value={editedStudent.address} onChange={handleChange} required />
        </label>
        <label>
          Mobile Number:
          <input type="number" name="mobileNumber" value={editedStudent.mobileNumber} onChange={handleChange} required />
        </label>
        <button type="submit">Update Student</button>
      </form>
    </div>
      
    </div>
  )
}

export default EditComponent
