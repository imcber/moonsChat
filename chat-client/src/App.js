import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import ChatForm from "./Components/ChatForm";
import NickName from "./Components/NickName";

//ENDPOINT del server
const ENDPOINT = "http://localhost:4000";

function App() {
  //Nick user
  const [userName, setUserName] = useState(null);
  const [socket, setSocket] = useState(null);
  const [saveMessages, setSaveMessages] = useState([]);

  useEffect(() => {
    setSocket(io.connect(ENDPOINT, { forceNew: true }));
    const myMessages = userName && userName.response ? userName.response : [];
    setSaveMessages(myMessages);
  }, [userName]);

  return (
    <div className="">
      {!userName || userName.nickName ? (
        <NickName setUserName={setUserName} userName={userName} />
      ) : (
        <ChatForm
          nickName={userName}
          socket={socket}
          setUserName={setUserName}
          saveMessages={saveMessages}
        />
      )}
    </div>
  );
}

export default App;
