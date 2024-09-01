import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import './App.css';
import TopBar from './components/TopBar';
import DecompressPage from './pages/DecompressPage';
import CompressPage from './pages/CompressPage';
import BottomBar from "./components/BottomBar";
import PreviewPage from "./pages/PreviewPage";
import UnsignPage from "./pages/UnsignPage";
import RepairPage from "./pages/RepairPage";
import SplitPage from "./pages/SplitPage";
import EncryptPage from "./pages/EncryptPage";
import DecryptPage from "./pages/DecryptPage";

function App() {
  return (
    <div className="App">
      <Analytics/>
      <SpeedInsights/>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<DecompressPage />}/>
          <Route path="/compress" element={<CompressPage />} />
          <Route path="/preview" element={<PreviewPage />} />
          <Route path="/verify" element={<UnsignPage />} />
          <Route path="/repair" element={<RepairPage />} />
          <Route path="/split" element={<SplitPage />} />
          <Route path="/encrypt" element={<EncryptPage />} />
          <Route path="/decrypt" element={<DecryptPage />} />
        </Routes>
        <BottomBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
