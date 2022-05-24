


export const Posts=({todos})=>{
    return (
        <div>
          {todos.map((d)=>{
             return (
                  <h2>{d.text}</h2>
             )
          })}
        </div>
    )
}