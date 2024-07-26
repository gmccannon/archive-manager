import './App.css';
import DragDrop from './components/DragDrop';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Upload a file to convert it to a pdf</h1>
        <DragDrop />
      </header>
    </div>
  );
}

export default App;
