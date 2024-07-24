import logo from './logo.svg';
import './App.css';
import MyButton from "./components/MyButton.js"
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('Black');

  return (
    <div className="App">
      <header className="App-header">
        <MyButton theme={theme} setTheme={setTheme} />
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{backgroundColor: theme}}>Upload a file to convert it to a pdf</h1>
        <form action="/uploader" method="post" enctype="multipart/form-data">
          <input type="file" name="file" required></input>
          <input type="submit" value="Upload"></input>
          <input type="reset" value="Clear File"></input>
        </form>
      </header>
    </div>
  );
}

export default App;
