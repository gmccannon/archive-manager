import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Upload a file to convert it to a pdf</h1>
        <form action="/uploader" method="post" enctype="multipart/form-data">
          <input type="file" name="file" required></input>
          <input type="submit" value="Upload"></input>
        </form>
      </header>
    </div>
  );
}

export default App;
