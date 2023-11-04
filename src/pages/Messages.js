import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import { API_URL } from '../config';
    
const Messages = () => {

  const auth = useSelector(state => state.auth);
  const [messages, setMessages] = useState([]);
  const unreadMessages = messages.filter((message) => !message.read);


  useEffect(() => {
    window.scrollTo(0, 0)
    const fetchAcceptedMessages = async () => {
      try {
        const response = await axios.get(`${API_URL}/message-accepted/${auth.user.id}`);
        setMessages(response.data);
      } catch (error) {
        console.error('Failed to fetch accepted messages:', error);
      }
    };
    const intervalId = setInterval(fetchAcceptedMessages, 5000); // Appeler fetchMessages toutes les 5 secondes
  
    return () => clearInterval(intervalId); // Annuler l'intervalle lorsque le composant est démonté
    // fetchAcceptedMessages();
  }, [auth.user.id]);

  function handleMarkAsRead(messageId) {
    MarkMessageAsRead(messageId);
  }
  

  async function MarkMessageAsRead(messageId) {
    try {
      const response = await axios.put(`${API_URL}/messages/${messageId}`);
      console.log('Message updated:', response.data);
    } catch (error) {
      console.error('Error updating message:', error);
    }
  }

  return (

    <div className="h-screen flex flex-col items-center">
    {unreadMessages.length > 0 ? (
      unreadMessages.map((message) => (
        <div
          key={message._id}
          className="p-4 mt-4 bg-white rounded-lg shadow-2xl w-11/12 md:w-1/2"
        >
          <p className="text-sm">De: {message.sender}</p>
          <p>{message.body}</p>
          <button
            className="text-red-700"
            onClick={() => handleMarkAsRead(message._id)}
          >
            Marquer comme lu
          </button>
        </div>
      ))
    ) : (
      <div className="p-4 mt-4 bg-white rounded-lg shadow-2xl w-11/12 md:w-1/2 text-center">
        Aucun message à lire
      </div>
    )}
  </div>

  );
};

export default Messages;