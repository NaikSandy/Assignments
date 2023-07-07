import * as React from 'react';
import { Component,useState } from 'react';
import axios from 'axios';
function Login() {
    const [name, setName] = useState('');
    const [DOB, setDOB] = useState('');
    const [Gender, setGender] = useState('Male');
    const [Address, setAddress] = useState('');
    const [MobNumber, setMobNumber] = useState('');
   const [friends,setFriends]=useState<any>([]);
    const handleSubmit = async (event:any) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3002/friends', {
                name: name,
                dateofbirth: DOB,
                gender: Gender,
                address: Address,
                MobileNumber: MobNumber,
            });
            console.log('Data posted successfully:', response.data);
            const newfriend = response.data;
            // setStudents([...students, newStudent]);
            setFriends([...friends,newfriend]);
        } catch (err) {
            console.log(err);
        }
    };

    return (
       
            <div className='add-container'>
                <form>
                    <div className='box'>
                        <label>Name:</label>
                        <input type='text' onChange={(e) => setName(e.target.value)} value={name} placeholder='Enter Name' />
                    </div>
                    <div className='box'>
                        <label>DateOfBirth:</label>
                        <input type='Date' onChange={(e) => setDOB(e.target.value)} value={DOB} />
                    </div>
                    <div className='box'>
                        <label>Gender:</label>
                        <select onChange={(e) => setGender(e.target.value)}>
                            <option>choose Gender</option>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                        </select>
                    </div>
                    <div className='box'>
                        <label>Address:</label>
                        <input type='text' onChange={(e) => setAddress(e.target.value)} value={Address} />
                    </div>
                    <div className='box'>
                        <label>Mobile Number:</label>
                        <input type='text' onChange={(e) => setMobNumber(e.target.value)} value={MobNumber} />
                    </div>
                    <button type='submit' onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
   
    );
}

export default Login;
