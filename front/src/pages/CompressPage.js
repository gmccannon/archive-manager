import './UploadPage.css'
import Compressor from '../components/Compressor';

function CompressPage() {
  return (
    <div className="App">
      <h1 className='tool__header__title'>Create an archive</h1>
      <h2 className='tool__header__subtitle'>Upload a file to create an archive</h2>
      <Compressor />
    </div>
  );
}

export default CompressPage;
