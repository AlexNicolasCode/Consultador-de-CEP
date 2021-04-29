import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import { Toggle } from './components/toggle/toggle';

import './global.scss';

export default function App() { 
  return (
    <div id="app">
      <Toggle />
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}
