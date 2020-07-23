import React, { useState, useEffect, useRef } from "react";
import MessageCard from "./MessageCard";
import HeaderChat from "./HeaderChat";
import SendButton from "./SendButton";

const ChatForm = ({ nickName, socket, setUserName, saveMessages }) => {
  //Respuesta server para los mensajes
  const [response, setResponse] = useState([...saveMessages]);
  const divChat = useRef(null);
  useEffect(() => {
    //Copia del response
    const messages = [...response];
    //Se espera un nuevo mensaje para pintar
    socket.on("new-message", (data) => {
      messages.push(data);
      setResponse([...messages]);
      divChat.current.scrollTop = divChat.current.scrollHeight;
    });
    socket.emit("new-message", {
      message: `${nickName} se ha unido`,
      nickName: "Admin",
    });
    return () => socket.disconnect();
  }, []);

  //funcion para mandar mensajes
  const sendMessage = (e) => {
    //para que no recargue
    e.preventDefault();
    //obtenemos el mensaje
    const {
      target: { message },
    } = e;
    if (message.value.trim() === "") return;
    socket.emit("new-message", { message: message.value, nickName });
    message.value = "";
  };

  const modifyName = () => {
    setUserName({ nickName, response });
  };

  return (
    <div className="w-screen h-screen bg-gray-200 max-h-screen">
      <HeaderChat nickName={nickName} modifyName={modifyName} />
      <div
        className="w-full flex flex-col overflow-y-scroll p-5"
        style={{ height: "75%" }}
        ref={divChat}
      >
        {response.map((item, indx) => (
          <MessageCard data={item} key={indx} user={nickName} />
        ))}
      </div>
      <form
        onSubmit={sendMessage}
        className="w-auto flex justify-center item-center"
        style={{ height: "10%" }}
      >
        <SendButton />
      </form>
    </div>
  );
};

export default ChatForm;
