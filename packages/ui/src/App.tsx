import UI_MESSAGE from 'common/constants/message';

function App() {
  const hello = () => {
    parent.postMessage(
      { msg: { type: UI_MESSAGE.HELLO, data: 'Hello, World!' } },
      '*',
    );
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
