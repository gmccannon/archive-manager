import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import DragDrop from './components/DragDrop';

function App() {
  return (
    <div className="App">
      <header>
        <ButtonAppBar />
      </header>
      <h2 className='tool__header__subtitle'>Upload a file to convert it to a pdf</h2>
      <DragDrop />
    </div>
  );
}

export default App;
