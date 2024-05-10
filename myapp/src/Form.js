import React from 'react';
import './style.css';

function Form() {
  return (
    <form className='mainForm'>
      <label>
        Enter your URL:
        <div>
          <input type="text" />
        </div>
      </label>
      <div className="checkButton">
        <button className='buttton'>Check</button>
      </div>
    </form>
  );
}

export default Form;
