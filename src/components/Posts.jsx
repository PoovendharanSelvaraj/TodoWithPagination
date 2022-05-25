


export const Posts=({todos})=>{
    return (
        <div>
          {todos.map((d)=>{
             return (
                  <h2 key={d.id}>{d.text}</h2>
             )
          })}
        </div>
    )
}