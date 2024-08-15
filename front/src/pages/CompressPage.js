import './UploadPage.css'
import FileForm from '../components/FileForm';

function CompressPage() {
  return (
    <div className="App">
      <h1 className='tool__header__title'>Create an archive</h1>
      <h2 className='tool__header__subtitle'>Upload a file to create an archive</h2>
      <FileForm endpoint="compress"/>
    </div>
  );
}

export default CompressPage;
