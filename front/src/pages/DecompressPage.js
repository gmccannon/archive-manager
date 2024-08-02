import './UploadPage.css'
import Decompressor from '../components/Decompressor';

function DecompressPage() {
  return (
    <div className="App">
      <h1 className='tool__header__title'>Decompress an archive</h1>
      <h2 className='tool__header__subtitle'>Upload any zip archive to decompress it</h2>
      <Decompressor />
    </div>
  );
}

export default DecompressPage;
