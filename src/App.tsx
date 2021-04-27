import Header from './components/header/header';
import Data from './components/data/data';
import Footer from './components/footer/footer';

import './global.scss';

export default function App() {
  return (
    <div className="App">
        <Header/>
        <Data/>
        <Footer/>
    </div>
  );
}
