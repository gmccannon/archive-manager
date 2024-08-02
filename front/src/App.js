import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import TopBar from './components/TopBar';
import DecompressPage from './pages/DecompressPage';
import CompressPage from './pages/CompressPage';
import BottomBar from "./components/BottomBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<DecompressPage />}/>
          <Route path="/compress" element={<CompressPage />} />
        </Routes>
        <BottomBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
