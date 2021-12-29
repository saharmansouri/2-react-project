import './App.css';
import Header from './Components/Header/Header';
import {Table}  from './Components/Table/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='body-contain'>
      <Header />
      <Table />
    </div>
  
  );
}

export default App;
