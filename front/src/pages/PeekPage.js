import './UploadPage.css'
import FileForm from '../components/FileForm';

function SignPage() {
  return (
    <div className="App">
      <h1 className='tool__header__title'>Peek into an archive</h1>
      <h2 className='tool__header__subtitle'>Upload an archive to peek at its file contents</h2>
      <FileForm endpoint="peek"/>
    </div>
  );
}

export default SignPage;
