import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import DragDrop from './components/DragDrop';

function App() {
  return (
    <div className="App">
      <header>
        <ButtonAppBar />
      </header>
      <h1 className='tool__header__title'>Anything to PDF</h1>
      <h2 className='tool__header__subtitle'>Upload any file to convert it to a PDF</h2>
      <DragDrop />
    </div>
  );
}

export default App;
