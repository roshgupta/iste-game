import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//root
ReactDOM.render(
 <div className='container'>
    {localStorage.getItem('attempted')==0?<App />:<div>You already attempted the quiz</div>}
  </div>,
  document.getElementById('root')
);


