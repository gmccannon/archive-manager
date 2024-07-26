import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Upload a file to convert it to a pdf</h1>
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
