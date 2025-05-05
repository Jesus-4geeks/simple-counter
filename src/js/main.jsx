import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));

let seconds = 0;
setInterval(() => {
  seconds += 1;
  
  // In case the counter overflows
  if (seconds >= 999_999) {
      seconds = 0;
  }

  // Forces re-render
  root.render(<Home seconds={seconds} />);
}, 1000);

root.render(
  <React.StrictMode>
    <Home seconds={seconds} />
  </React.StrictMode>,
)
