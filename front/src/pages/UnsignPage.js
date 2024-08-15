import './UploadPage.css'
import FileForm from '../components/FileForm';

function UnsignPage() {
  return (
    <div className="App">
      <h1 className='tool__header__title'>Verify an archive</h1>
      <h2 className='tool__header__subtitle'>Upload a file to verify its signature</h2>
      <FileForm endpoint="verify"/>
    </div>
  );
}

export default UnsignPage;
