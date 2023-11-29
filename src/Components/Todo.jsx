import { useEffect, useRef, useState } from "react";
import TodoItems from "./TodoItems";
let count = 0;
const Todo = () => {
  const [todo, settodo] = useState([]);
  const ref = useRef(null);

  
  const Add = () => {
    settodo([...todo, { no: count++, text: ref.current.value, strike: "" }]);
    ref.current.value = ""; // Clear the input field
  };

  //isme ham localstrg ka data ko le kar settodo me store karenge

  useEffect(() => {
    settodo(JSON.parse(localStorage.getItem("todo")));
  }, []);

  //   yeh use effect jaise hi todo me change ayga tab chalega
  // aur console me todo ke update ko print karega
  // LocalStorage mein data store karne ke liye, todo array ko JSON.stringify() se string mein convert karna zaruri hai, kyun ki localStorage sirf strings store kar sakta hai.
  useEffect(() => {
    setTimeout(() => {
      console.log(todo);
      localStorage.setItem("todo", JSON.stringify(todo));
    }, 100);
  }, [todo]);

  return (
    <div className='m-10'>
      {/* heading */}
      <div className='heading h-20 font-bold text-3xl '> Taskify</div>

      {/* inputs */}
      <div className='todoinput flex  '>
        <input
          ref={ref}
          className='h-12 border shadow relative border-slate-300 rounded-md px-3 py-1 w-full bg-gray-50 focus:outline-none '
          type='text'
          placeholder='Add Your Task'
        />
       <button
  onClick={Add}
  className='absolute right-10 text-lg font-bold rounded-lg px-7 py-1 bg-red-500 text-white h-12 transition transform hover:scale-105 focus:scale-105'
>
  Add
</button>

      </div>

      {/* show */}
      <div className='todolist'>
        {/* - todo array ko map karke har item ke liye TodoItems component ko render kiya ja raha hai.
- key, no, strike, aur text props TodoItems component ko pass kiye ja rahe hain.
       */}
        {todo.map((e, i) => {
          return (
            <>
              <TodoItems key={i} settodo={settodo} no={e.no} strike={e.strike} text={e.text} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
