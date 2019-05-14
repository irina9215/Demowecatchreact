import React from 'react';
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import './Style/App.css';
import './Style/overwrited.css';
import HomePage from './Components/Home';

function App() {
  return (
    <div className="App">
      <HomePage></HomePage>
    </div>
  );
}

export default App;
