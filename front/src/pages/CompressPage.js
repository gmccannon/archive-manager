import './UploadPage.css'
import Compressor from '../components/Compressor';

function CompressPage() {
  return (
    <div className="App">
      <h1 className='tool__header__title'>Compress a PDF</h1>
      <h2 className='tool__header__subtitle'>Upload a PDF to compress it</h2>
      <Compressor />
    </div>
  );
}

export default CompressPage;
