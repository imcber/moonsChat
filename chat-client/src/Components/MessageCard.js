import React from "react";

const MessageCard = ({ data: { message, nickName }, user }) => {
  const { aling, color } = getClassType(nickName, user);
  return (
    <div className={`p-2 ${aling}`}>
      <div
        className={`inline-flex items-center bg-white leading-none text-${color} rounded-full p-2 shadow text-teal text-sm`}
      >
        <span
          className={`inline-flex bg-${color} text-white rounded-full h-6 px-3 justify-center items-center`}
        >
          {nickName}
        </span>
        <span className="inline-flex px-2">{message}</span>
      </div>
    </div>
  );
};

const getClassType = (nickName, user) => {
  if (nickName === user) return { aling: "self-end", color: "indigo-400" };
  if (nickName === "Admin") return { aling: "self-center", color: "pink-400" };
  return { aling: "self-start", color: "purple-600" };
};

export default MessageCard;
