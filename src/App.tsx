import Header from './components/header/header';
import Search from './components/search/search';
import Data from './components/data/data';
import Footer from './components/footer/footer';

import './global.scss';

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <Data/>
      <Footer/>
    </div>
  );
}
