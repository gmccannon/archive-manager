import './UploadPage.css'
import FileForm from '../components/FileForm';

function RepairPage() {
  return (
    <div className="App">
      <h1 className='tool__header__title'>Repair an archive</h1>
      <h2 className='tool__header__subtitle'>Upload an archive to attempt a repair</h2>
      <FileForm endpoint="repair"/>
    </div>
  );
}

export default RepairPage;
