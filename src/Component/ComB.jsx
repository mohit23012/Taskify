
const ComB = ({a,fn}) => {
  return (
    <div>ComB {a}

     <br/>
    <button onClick={()=>{
        fn(10)
    }}>update</button></div>
  )
}

export default ComB