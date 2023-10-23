import React from 'react';

const MessageContext = React.createContext({
    unreadMessagesCount: 0,
    setUnreadMessagesCount: () => {},
});

export default MessageContext;
