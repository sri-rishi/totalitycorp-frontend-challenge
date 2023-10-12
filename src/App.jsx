import './App.css';
import Navbar from './component/navbar/Navbar';
import { ShoppingPage } from './pages';

const App = () => {


  return (
    <div className="flex flex-col gap-4">
      <Navbar />
      <ShoppingPage />
    </div>
  );
}

export default App;
