import './UploadPage.css'
import Decrypter from '../components/Decrypter';

function DecryptPage() {
  return (
    <div className="App">
      <h1 className='tool__header__title'>Decrypt an archive</h1>
      <h2 className='tool__header__subtitle'>Upload any zip archive to decrypt it</h2>
      <Decrypter />
    </div>
  );
}

export default DecryptPage;
