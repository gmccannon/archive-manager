import './UploadPage.css'
import FileForm from '../components/FileForm';

function DecryptPage() {
  return (
    <div className="App">
      <h1 className='tool__header__title'>Decrypt an archive</h1>
      <h2 className='tool__header__subtitle'>Upload an archive to decrypt it</h2>
      <FileForm endpoint="compressor"/>
    </div>
  );
}

export default DecryptPage;
