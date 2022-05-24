
import styles from "./Pagination.module.css"
import React from 'react'

const Pagination = ({postPerPage, totalPosts,paginate}) => {
    let PaginationNumbers = []
    for(var i=1; i<=Math.ceil(totalPosts/postPerPage); i++){
      PaginationNumbers.push(i)
    }
  return (
    <div className={styles.pagin}> 
     <ul>
         <a className={styles.a1} href="!#">Pages:</a>
     {PaginationNumbers.map((n)=>{
         return (
            <li><a onClick={()=>paginate(n)} key={n} href="!#" className={styles.number}>{n}</a></li> 
         )
     })}
     </ul>

    </div>
  )
}

export default Pagination