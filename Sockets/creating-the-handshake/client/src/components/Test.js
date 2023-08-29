import io from "socket.io-client";
import { useState, useEffect } from "react";

const Test = (props) => {
  const [socket] = useState(() => io(":8000"));
  const [userName, setUserName] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    // console.log('Is this running?');
    // socket.emit(userName, data);

    socket.on("welcome", (data) => {
      setData(data);
      console.log(data);
    });
    return () => socket.removeAllListeners;
  }, [socket]);

  // const onSubmitHandler = () => {
  //     socket.emit(userName, data);
  //     return () => socket.removeAllListeners;
  // }
  return (
    <h1>{data}</h1>
    // <form onClick={onSubmitHandler}>
    //     <label>Name:</label>
    //     <input type='text' value={userName} onChange={(e) => setUserName(e.target.value)} />
    //     <label>Message:</label>
    //     <input type='text' value={data} onChange={(e) => setData(e.target.value)} />

    //     <input type='submit' value="send" />

    // </form>
  );
};

export default Test;
