import './UploadPage.css'
import Splitter from '../components/Splitter';

function SplitPage() {
  return (
    <div className="App">
      <h1 className='tool__header__title'>Split an archive</h1>
      <h2 className='tool__header__subtitle'>Upload any zip archive to split it in two</h2>
      <Splitter />
    </div>
  );
}

export default SplitPage;
