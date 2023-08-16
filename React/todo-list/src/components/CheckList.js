import React, { useState } from "react";

const CheckList = (props) => {
  const [checkList, setcheckList] = useState([]);

  const handleCheck = e => {
    let checkListCopy = [...checkList];
    if(e.target.checked){
        checkListCopy.push(e.target.value)
    } else {
        checkListCopy.pop();
    }
    setcheckList(checkListCopy);
  }

//   useEffect(() => {
//     const data = localStorage.getItem('CHECK_LIST_ARRAY');
//     if (data !== null) setcheckList(JSON.parse(data));
//   }, [])

//   useEffect(() => {
//     localStorage.setItem('CHECK_LIST_ARRAY', JSON.stringify([checkList]))
//   }, [checkList])

//   useEffect(() => {
//     const data = window.localStorage.getItem('TODO_LIST_ARRAY');
//     if (data !== null) props.setTodoArr(JSON.parse(data));
//   }, [])

//   useEffect(() => {
//     window.localStorage.setItem('TODO_LIST_ARRAY', JSON.stringify(props.todoArr))
//   }, [props.todoArr])


  return (
    <>
      <ul>
        {props.todoArr.map((item, i) => {
          return (
            <div key={i}>
                <li style={checkList.includes(item)? {textDecoration:"line-through"}:{textDecoration:"none"}}>
                    <input type="checkbox" value={item} onChange={handleCheck} />
                    {item}
                    <button onClick={ e => props.delete(i)}>Delete</button>
                </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default CheckList;
