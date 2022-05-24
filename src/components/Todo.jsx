import { useState } from "react"
import { useEffect } from "react";
import Pagination from "./Pagination";
import { Posts } from "./Posts";



export const Todo=()=>{
    
    const [newTodo,setNewTodo]=useState("");
    const [todos,setTodos]=useState([]);
    const [currPage,setCurrPage]=useState(1);
    const [dperPage]=useState(4);

    const handleClick=()=>{
       
        fetch("http://localhost:3004/todos",{
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
            setNewTodo("");})
    }

    useEffect(()=>{
        fetch("http://localhost:3004/todos")
        .then((r)=>r.json())
        .then((d)=>setTodos(d))
    },[]);
   
    const indexOfLastPost=currPage * dperPage;
    const indexOfFirstPost = indexOfLastPost - dperPage;
    const currD=todos.slice(indexOfFirstPost,indexOfLastPost);
    const paginate=(number)=>{
         setCurrPage(number)
    }
    return (
        <div>
            <input type="text" onChange={(e)=>setNewTodo(e.target.value)}/>
            <button onClick={handleClick}>+</button>
            <Posts todos={currD}  />
            <Pagination postPerPage={dperPage} totalPosts={todos.length} paginate={paginate}/>
        </div>
    );
}