import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import DragDrop from './components/DragDrop';

function App() {
  return (
    <div className="App">
      <header>
        <ButtonAppBar />
      </header>
      <h1>Upload a file to convert it to a pdf</h1>
      <DragDrop />
    </div>
  );
}

export default App;
