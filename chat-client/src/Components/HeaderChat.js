import React, { useState, useEffect } from "react";

const HeaderChat = ({ nickName, modifyName }) => {
  return (
    <header
      className="text-gray-100 bg-indigo-400 body-font shadow w-full"
      style={{ height: "10%" }}
    >
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <div className="w-full flex justify-between items-center">
          <h2 className="xl:text-xl bold">{`Bienvenido ${nickName}`}</h2>
          <button
            onClick={() => modifyName()}
            className="bg-pink-300 text-white font-semibold py-2 px-4 rounded text-sm xl:text-xl hover:bg-pink-400"
          >
            Configuracion
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderChat;
