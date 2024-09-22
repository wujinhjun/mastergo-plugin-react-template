import UI_MESSAGE from 'common/constants/message';
import { sendMsgToPlugin } from 'common/messages/sendMessage';

function App() {
  const hello = () => {
    sendMsgToPlugin({ type: UI_MESSAGE.HELLO, data: 'Hello, World!' });
  };

  return (
    <>
      <h2>hello</h2>

      <button id='cancel' onClick={hello}>
        Hello
      </button>
    </>
  );
}

export default App;
