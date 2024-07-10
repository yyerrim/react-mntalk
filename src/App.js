import logo from './logo.svg';
import './App.css';

// index.html에 <link>를 직접 넣어주는 방법도 있음
import './css/reset.css';
import './css/main.css';
import './css/read.css';
import './css/adsform.css';

import { Header, AdsHeader } from './Header';
import Nav from './Nav';
import { Container, AdsContainer } from './Container';
import Footer from './Footer';

// read.html
// function App() {
//   return (
//     <div className="App" id="wrap">
//       <Header />
//       <Nav />
//       <Container />
//       <Footer />
//     </div>
//   );
// }

// adsform.html
function App() {
  return (
    <div className="App" id="wrap">
      <AdsHeader />
      <Nav />
      <AdsContainer />
      <Footer />
    </div>
  );
}

export default App;
