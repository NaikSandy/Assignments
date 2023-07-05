import React, { useState,useEffect} from 'react';
import "./Book.css";
import { v4 as uuidv4 } from 'uuid';

function Book() {
    
const[BookTitle,setBookTitle]=useState("");
const[BookAuthor,setBookAuthor]=useState("");
const[book,setBook]=useState([]);
let b;
let i=0;
useEffect(() => {
    // Load books from local storage on component mount
    const storedBooks = localStorage.getItem('book');
    if (storedBooks) {
      setBook(JSON.parse(storedBooks));
      console.log(storedBooks,"stored")
    }
  }, []);

  useEffect(() => {
    // Save books to local storage whenever books state changes
    localStorage.setItem('book', JSON.stringify(book));
  }, [book]);
const handleSubmit=()=>{
    
 setBook([...book,{BookTitle:BookTitle,BookAuthor:BookAuthor,Id: uuidv4()}])
 setBookAuthor("");
 setBookTitle("");
}
console.log(book,"book");
const removelist=(id)=>{
   let  delbook=book.filter((book)=>book.Id!=id);
    setBook(delbook);


}

    return ( <>
    <div className="Book-contain">

        <div>

<div>
    {
    book.length>0 && book.map((item)=>{
        return(
            <div className="list" onClick={()=>removelist(item.Id)}>
            <ul key={item.Id}>
                <li>{item.BookTitle}</li>
                <li>{item.BookAuthor}</li>
            
                <li>{localStorage.getItem(item.BookAuthor)}</li>
                <li>{localStorage.getItem(item.BookAuthor)}</li>
            </ul>
            </div>
        )
        })
    }
</div>

        </div>
       <div>
        <input type="text" placeholder="BookTitle" onChange={(e)=>setBookTitle(e.target.value)}/>
        <br></br>
        <input type="text" placeholder="BookAuthor" onChange={(e)=>setBookAuthor(e.target.value)}/>
        <br></br>
       <button onClick={handleSubmit}>Add</button>
        </div> 
    </div>
    
    </> );
}

export default Book;