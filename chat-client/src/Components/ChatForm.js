import React, { useState, useEffect } from "react";

const ChatForm = ({ nickName, socket }) => {
  //Respuesta server
  const [response, setResponse] = useState([]);
  useEffect(() => {
    const messages = [...response];
    socket.on("new-message", (data) => {
      messages.push(data);
      setResponse([...messages]);
    });
    socket.on("connection", (data) => {
      console.log(data);
    });
    socket.emit("new-message", {
      message: `${nickName} se ha unido`,
      nickName: "Admin",
    });
    return () => socket.disconnect();
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    const {
      target: { message },
    } = e;
    socket.emit("new-message", { message: message.value, nickName });
    message.value = "";
  };
  return (
    <div>
      <p>{`Hola ${nickName}`}</p>
      {response.map(({ message, nickName }, indx) => (
        <p key={indx}>{`${nickName}: ${message}`}</p>
      ))}
      <form onSubmit={sendMessage}>
        <input id="message" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ChatForm;
