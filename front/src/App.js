import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import TopBar from './components/TopBar';
import DecompressPage from './pages/DecompressPage';
import CompressPage from './pages/CompressPage';
import BottomBar from "./components/BottomBar";
import SignPage from "./pages/SignPage";
import UnsignPage from "./pages/UnsignPage";
import RepairPage from "./pages/RepairPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<DecompressPage />}/>
          <Route path="/compress" element={<CompressPage />} />
          <Route path="/sign" element={<SignPage />} />
          <Route path="/verify" element={<UnsignPage />} />
          <Route path="/repair" element={<RepairPage />} />
        </Routes>
        <BottomBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
