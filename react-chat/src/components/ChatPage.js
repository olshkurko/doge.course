import React from 'react';
import Sidebar from './SideBar';
import Header from './Header';
import Chat from './Chat';
import ErrorMessage from './ErrorMessage';

class ChatPage extends React.Component {
  componentDidMount() {
    const {
      match,
      fetchAllChats,
      fetchMyChats,
      setActiveChat,
      socketsConnect,
      mountChat,
    } = this.props;

    Promise.all([fetchAllChats(), fetchMyChats()])
      .then(() => {
        socketsConnect();
      })
      .then(() => {
        const { chatId } = match.params;
        if (chatId) {
          setActiveChat(chatId);
          mountChat(chatId);
        }
      });
  }
  componentWillReceiveProps(nextProps) {
    const {
      match: { params },
      setActiveChat,
      unmountChat,
      mountChat,
    } = this.props;
    const { params: nextParams } = nextProps.match;
    if (nextParams.chatId && params.chatId !== nextParams.chatId) {
      setActiveChat(nextParams.chatId);
      unmountChat(params.chatId);
      mountChat(nextParams.chatId);
    }
  }
  render() {
    const {
      chats,
      logout,
      activeUser,
      createChat,
      joinChat,
      leaveChat,
      deleteChat,
      sendMessage,
      messages,
      editUser,
      error,
      isConnected,
    } = this.props;

    return (
      <React.Fragment>
        <Header
          isConnected={isConnected}
          activeUser={activeUser}
          activeChat={chats.active}
          leaveChat={leaveChat}
          deleteChat={deleteChat}
          logout={logout}
          editUser={editUser}
        />
        <Sidebar
          isConnected={isConnected}
          chats={chats}
          createChat={createChat}
        />
        <Chat
          isConnected={isConnected}
          messages={messages}
          sendMessage={sendMessage}
          joinChat={joinChat}
        />
        <ErrorMessage error={error} />
      </React.Fragment>
    );
  }
}

export default ChatPage;
