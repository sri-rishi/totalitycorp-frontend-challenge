import './App.css';
import Navbar from './component/navbar/Navbar';
import { ShoppingPage } from './pages';

const App = () => {
  return (
    <div>
      <Navbar />
      <ShoppingPage />
    </div>
  );
}

export default App;
