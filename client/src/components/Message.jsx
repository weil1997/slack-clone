import React from "react";

export default function message({ message }) {
  console.log(message);
  return (
    <div className="message-container">
      <img src={message.user.image} alt="" width="50" height="50" />
      <div>
        <h3>{message.user.name}</h3>
        <p>
          {new Date(message.createdAt).getHours()}
          {new Date(message.createdAt).getMinutes()}
        </p>
      </div>
      <p>{message.text}</p>
    </div>
  );
}
