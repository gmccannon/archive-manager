import './UploadPage.css'
import Uploader from '../components/Uploader';

function UploadPage() {
  return (
    <div className="App">
      <h1 className='tool__header__title'>Convert to PDF</h1>
      <h2 className='tool__header__subtitle'>Upload any file to convert it to a PDF</h2>
      <Uploader />
    </div>
  );
}

export default UploadPage;
