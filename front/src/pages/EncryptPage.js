import './UploadPage.css'
import Encrypter from '../components/Encrypter';

function EncryptPage() {
  return (
    <div className="App">
      <h1 className='tool__header__title'>Encrypt an archive</h1>
      <h2 className='tool__header__subtitle'>Upload any zip archive to encrypt it</h2>
      <Encrypter />
    </div>
  );
}

export default EncryptPage;
