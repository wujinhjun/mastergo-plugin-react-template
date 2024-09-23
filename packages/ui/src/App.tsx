import { useEffect, useState } from 'react';
import UI_MESSAGE from 'common/constants/message';
import { sendMsgToPlugin, type MessageType } from 'common/messages/sendMessage';

function App() {
  const [receivedMsg, setReceivedMsg] = useState('');

  const hello = () => {
    sendMsgToPlugin({ type: UI_MESSAGE.HELLO, data: 'Hello, World!' });
  };

  const receiveMessage = (event: MessageEvent<MessageType>) => {
    const res = event.data;
    setReceivedMsg(res.data);
  };

  useEffect(() => {
    window.addEventListener('message', receiveMessage);

    return () => window.removeEventListener('message', receiveMessage);
  }, []);

  return (
    <>
      <h2>hello</h2>

      <button onClick={hello}>hello</button>

      <h3>msg</h3>
      <p>{receivedMsg}</p>
    </>
  );
}

export default App;
