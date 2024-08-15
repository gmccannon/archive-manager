import './UploadPage.css'
import Signer from '../components/Signer';

function SignPage() {
  return (
    <div className="App">
      <h1 className='tool__header__title'>Sign an archive</h1>
      <h2 className='tool__header__subtitle'>Upload an archive to create a security signature</h2>
      <Signer />
    </div>
  );
}

export default SignPage;
