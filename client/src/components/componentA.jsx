import axios from "axios" ;
import { useEffect } from "react";
import { useState } from "react";

export const ComponentA = () => {
const [inputdata , setInputdata] = useState() ;
const [current , setCurrent] = useState() ;
const [data , setData] = useState() ;
const [toggole , setToggole]  = useState(false) ;

// Add to-do data to back-end
const handleaddTodo = () => {
    axios.post("http://localhost:2345/todolist",{"task":inputdata});
    setToggole(!toggole) ;
}
useEffect(()=>{
    async function fetchData() {
        try {
            const response = await fetch(
                `http://localhost:2345/todolist`
            );
            const res = await response.json();
            setData(res.data);
        } catch (e) {
            console.error(e);
        }
    };
    fetchData();
},[toggole]) 

// Delete perticular id data from back-end
const handleDelete = (id) => {
    axios.delete(`http://localhost:2345/todolist/${id}`)
    setToggole(!toggole) ;
}

// Get Data by ID 
const handleCurrent = (id) => {
async function fetchDatabyID() {
    try {
        const response = await fetch(
            `http://localhost:2345/todolist/${id}`
        );
        const res = await response.json();
        setCurrent(res.task);
    } catch (e) {
        console.error(e);
    }
};
fetchDatabyID();
}

if(!data){
    axios.get("http://localhost:2345/todolist").then(res => {setData(res.data)})
}
else{ 
 return(
    <div style={{display:"flex"}}>
        <div style={{marginLeft:"10%"}}>
            <h1>Add To-do</h1>
            <input type="text" placeholder="Add To-do here !" onChange={(e) => setInputdata(e.target.value)}/>
            <button onClick={() => handleaddTodo()}>Submit</button>
            {data.map((el,id)=>{
                return(
                <div style={{width:"100px" , display:"flex" ,margin:"auto" ,marginTop:"10px"}} key={id}>
                    <h4>{el.task}</h4>
                    <button onClick={() => handleCurrent(el._id)}>Current</button>
                    <button onClick={() => handleDelete(el._id)}>Delete</button>
                </div>
                )
            })}
        </div>
        <div style={{marginLeft:"10%"}}>
            <h1>Current Task</h1>
            <h3>{current}</h3>
        </div>
    </div>
 )
}
}

