const TodoItems = ({ no, strike, text, settodo }) => {
  const Striketogle = (no) => {
    const data = JSON.parse(localStorage.getItem("todo"));
    const foundItem = data.find((todo) => todo.no === no);
    console.log(foundItem);

    if (foundItem) {
      console.log(foundItem.strike);
      foundItem.strike = foundItem.strike === "" ? "line-through" : "";
    }

    settodo(data);
  };

  const Delete = (no) => {
    const data = JSON.parse(localStorage.getItem("todo"));

    // Create a new array without the object with the specified 'no'
    const newData = data.filter((item) => {
      return item.no !== no;
    });
    console.log(newData);

    // Update the 'todo' in localStorage with the new array
    localStorage.setItem("todo", JSON.stringify(newData));
    settodo(newData);
  };

  return (
    <>
      <div
        className={`items flex m-10 items-center gap-1 ${
          strike === "line-through" ? "line-through" : ""
        }`}>
        <div
          onClick={() => {
            Striketogle(no);
          }}
          className='container flex items-center gap-2 p-2 rounded-md cursor-pointer transition transform hover:scale-105 focus:scale-105 hover:shadow'>
          {strike === "" ? (
            <img className='h-8' src='/src/Assets/not_tick.png' alt='' />
          ) : (
            <img className='h-8' src='/src/Assets/tick.png' alt='' />
          )}
          <div className='text-lg'>{text}</div>
          <img
            onClick={() => {
              Delete(no);
            }}
            className='delet absolute right-2 h-4  cursor-pointer transition-transform transform hover:scale-125 focus:scale-125 hover:shadow-xl'
            src='/src/Assets/cross.png'
            alt=''
          />
        </div>
      </div>
    </>
  );
};

export default TodoItems;
