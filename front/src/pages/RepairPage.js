import './UploadPage.css'
import Repair from '../components/Repair';

function RepairPage() {
  return (
    <div className="App">
      <h1 className='tool__header__title'>Repair an archive</h1>
      <h2 className='tool__header__subtitle'>Upload any zip archive to attempt a repair</h2>
      <Repair />
    </div>
  );
}

export default RepairPage;
