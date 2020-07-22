import React from "react";

const NickName = ({ setUserName }) => {
  const handlerSubmit = (e) => {
    e.preventDefault();
    setUserName(e.target.nickName.value);
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input id="nickName" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default NickName;
