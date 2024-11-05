import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import EmojiPicker from "emoji-picker-react";

const ChatWindow = ({ currentChat }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      setNewMessage("");
    }
  };

  const onEmojiClick = (emojiObject) => {
    //console.log("emojiObject" ,emojiObject);
    setNewMessage(newMessage + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className="w-3/4 flex flex-col h-full">
      {currentChat ? (
        <>
          <ChatHeader currentChat={currentChat} />
          <div className="flex-grow p-4 overflow-y-auto bg-gray-100">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 my-2 rounded-lg max-w-[30%] ${
                  msg.sender === "user"
                    ? "ml-auto bg-green-500 text-white"
                    : "mr-auto bg-white text-black"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-4 bg-gray-200 flex items-center">
            <input
              type="text"
              placeholder="Type a message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-grow p-2 rounded border border-gray-300 focus:outline-none"
            />
            <button
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              className="ml-4 bg-gray-300 p-2 rounded"
            >
              😊
            </button>
            <button
              onClick={sendMessage}
              className="ml-4 bg-green-500 text-white px-4 py-2 rounded"
            >
              Send
            </button>
          </div>

          {showEmojiPicker && (
            <div className="absolute bottom-20 right-10">
              <EmojiPicker onEmojiClick={onEmojiClick} />
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center justify-center flex-grow text-gray-500">
          Select a chat to start messaging
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
