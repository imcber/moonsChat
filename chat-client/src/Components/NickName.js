import React from "react";

const NickName = ({ setUserName }) => {
  const handlerSubmit = (e) => {
    e.preventDefault();
    setUserName(e.target.nickName.value);
  };

  return (
    <div className="h-screen w-screen bg-indigo-400">
      <form
        onSubmit={handlerSubmit}
        className="h-full w-full flex items-center justify-center flex-col"
      >
        <h1 className="text-white xl:text-6xl text-3xl pb-6 font-semibold">
          Escribe tu nombre
        </h1>
        <input
          id="nickName"
          className="xl:w-3/4 w-4/5 bg-transparent text-white xl:text-6xl text-3xl border-solid border-b-8 border-pink-300 text-center rounded m-5"
          autoComplete="off"
        />
        <button
          type="submit"
          className="bg-pink-300 text-white font-semibold py-2 px-4 rounded xl:w-1/5 w-2/5 mt-10 xl:text-3xl text-xl text-bold hover:bg-pink-400"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};

export default NickName;
