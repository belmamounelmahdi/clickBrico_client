/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    const newSocket = io('http://localhost:3060'); // Changez le port pour correspondre à votre serveur React.js
    setSocket(newSocket);
    // Ajoutez cette partie pour émettre l'événement joinRoom
    newSocket.emit('joinRoom', { userId: auth.user.id, providerId: '6404da928084faf16c9dd1fc' });
    newSocket.on('receiveMessage', (data) => {
      console.log('Message reçu :', data); // Ajoutez cette ligne
      setMessages((prevMessages) => [...prevMessages, { text: data.message }]); // Changez cette ligne
    });
    
    
  
    return () => {
      newSocket.disconnect();
    };
  }, []);
  

  const sendMessage = (message) => {
    if (socket) {
      const data = {
        userId: auth.user.id, // Utilisez l'ID de l'utilisateur actuel
        providerId: '6404da928084faf16c9dd1fc', // Utilisez l'ID du prestataire sélectionné
        message: message, // Contenu du message
      };
      // Utilisez la variable 'data' pour envoyer les données
      socket.emit('sendMessage', data);
    }
  };
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(inputMessage);
    setInputMessage('');
  };
  

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow overflow-auto">
        <div className="p-4 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="text-blue-500 font-semibold">Nom d'utilisateur :</div>
              <div>{message}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-none">
        <div className="border-t-2 border-gray-200 p-4">
          <form onSubmit={handleSubmit}>
            <div className="flex space-x-2">
              <input
                type="text"
                className="flex-grow p-2 rounded border border-gray-300"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Tapez votre message ici..."
              />
              <button className="p-2 bg-blue-500 text-white rounded" type="submit">
                Envoyer
              </button>
            </div>
          </form>
        </div> 
      </div>
    </div>
  );
};

export default Chat;
