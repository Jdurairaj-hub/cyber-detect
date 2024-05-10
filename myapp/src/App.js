import React from 'react';
import HelloWorld from './HelloWorld';
import Form from './Form';

function App() {
  return (
    <div>
      {/* <HelloWorld /> */}
      {/* <form  className='mainForm'>

        <label>
          Enter your URL:
          <div>
            <input type="text" />
          </div>
        </label>

        <div className="checkButton">
          <button className='buttton'>Check</button>
        </div>

      </form> */}
      <Form />
    </div>
  );
}

export default App;