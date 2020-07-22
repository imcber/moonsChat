import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import ChatForm from "./Components/ChatForm";
import NickName from "./Components/NickName";

//ENDPOINT del server
const ENDPOINT = "http://192.168.100.29:4000";

function App() {
  //Nick user
  const [userName, setUserName] = useState(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io.connect(ENDPOINT, { forceNew: true }));
  }, []);

  return (
    <div className="">
      {!userName ? (
        <NickName setUserName={setUserName} />
      ) : (
        <ChatForm nickName={userName} socket={socket} />
      )}
    </div>
  );
}

export default App;
