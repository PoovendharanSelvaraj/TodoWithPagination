import { useState } from "react"
import { useEffect } from "react";

import { Posts } from "./Posts";
import axios from "axios";


export const Todo=()=>{
    
    const [newTodo,setNewTodo]=useState("");
    const [todos,setTodos]=useState([]);
   const [page,setPage]=useState(1);
   const [total,setTotal]=useState();
   const [limit,setLimit]=useState(5)

    const handleClick=()=>{
  
        newTodo!==""?fetch("http://localhost:8080/todos",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                text:newTodo,
                status:false
            })
        }).then(r=>r.json())
        .then((d)=>{
            setTodos([...todos,d]); 
            setNewTodo("");}):alert(`Enter Todo!!!`)
    }

    useEffect(()=>{
        axios.get(`http://localhost:8080/todos?_page=${page}&_limit=${limit}`)
        .then((d)=>{setTodos(d.data)
            console.log(d)
            setTotal(d.headers["x-total-count"])
        })
           
    },[page,limit]);
  
    return (
        <div>
            <h1>TODO</h1>
            <input type="text" value={newTodo} onChange={({target})=>setNewTodo(target.value)} />
            <button onClick={handleClick} >+</button>
            <Posts key={todos.id} todos={todos} />
            <button disabled={page===1} onClick={()=>setPage(page-1)} >Prev</button>
             <select name="" id="" onChange={(e)=>{setLimit(e.target.value)}}>
                 <option value="5">5</option>
                 <option value="10">10</option>
                 <option value="15">15</option>
             </select>
            <button disabled={total<page * 5} onClick={()=>setPage(page+1)} >Next</button>
        </div>
    );
}