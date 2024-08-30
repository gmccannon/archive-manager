import './UploadPage.css'
import FileForm from '../components/FileForm';

function SplitPage() {
  return (
    <div className="App">
      <h1 className='tool__header__title'>Split an archive</h1>
      <h2 className='tool__header__subtitle'>Upload an archive to split it in two</h2>
      <FileForm endpoint="spliter"/>
    </div>
  );
}

export default SplitPage;
