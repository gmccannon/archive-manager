import './UploadPage.css'
import FileForm from '../components/FileForm';

function SignPage() {
  return (
    <div className="App">
      <h1 className='tool__header__title'>Sign an archive</h1>
      <h2 className='tool__header__subtitle'>Upload an archive to create a security signature</h2>
      <FileForm endpoint="signer"/>
    </div>
  );
}

export default SignPage;
