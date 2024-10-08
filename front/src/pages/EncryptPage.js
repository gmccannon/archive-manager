import './UploadPage.css'
import FileForm from '../components/FileForm';

function EncryptPage() {
  return (
    <div className="App">
      <h1 className='tool__header__title'>Encrypt an archive</h1>
      <h2 className='tool__header__subtitle'>Upload an archive to encrypt it</h2>
      <FileForm endpoint="compressor"/>
    </div>
  );
}

export default EncryptPage;
