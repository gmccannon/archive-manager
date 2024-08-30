import './UploadPage.css'
import FileForm from '../components/FileForm';

function DecompressPage() {
  return (
    <div className="App">
      <h1 className='tool__header__title'>Decompress an archive</h1>
      <h2 className='tool__header__subtitle'>Upload an archive to decompress it</h2>
      <FileForm endpoint="decompressor"/>
    </div>
  );
}

export default DecompressPage;
