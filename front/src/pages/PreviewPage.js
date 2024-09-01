import './UploadPage.css'
import FileForm from '../components/FileForm';

function SignPage() {
  return (
    <div className="App">
      <h1 className='tool__header__title'>Preview an archive</h1>
      <h2 className='tool__header__subtitle'>Upload an archive to preview its contents</h2>
      <FileForm endpoint="preview"/>
    </div>
  );
}

export default SignPage;
