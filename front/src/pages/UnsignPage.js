import './UploadPage.css'
import Unsigner from '../components/Unsigner';

function UnsignPage() {
  return (
    <div className="App">
      <h1 className='tool__header__title'>Verify an archive</h1>
      <h2 className='tool__header__subtitle'>Upload a file to verify it's signature</h2>
      <Unsigner />
    </div>
  );
}

export default UnsignPage;
