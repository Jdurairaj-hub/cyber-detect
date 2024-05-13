import React from 'react';
import './style.css';

function Form() {
  return (
    <div className='centerDiv'>
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

      <div>
          <button>Analyse</button>
      </div>
    </div>
    
  );
}

export default Form;
