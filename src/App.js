import './index.css';
import ZipCodeForm from './components/ZipCodeForm'

function App() {
  return (
    <div id='app' className="h-screen bg-cover bg-center bg-[url('./nasa-Q1p7bh3SHj8-unsplash.jpg')]">
      <div id='layout' className='bg-black/10 h-full w-full flex items-center justify-center'>
        <ZipCodeForm />
      </div>
    </div>
  );
}

export default App;
