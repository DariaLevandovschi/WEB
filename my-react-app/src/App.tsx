import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const header = <Header /> as any; // using angle-bracket syntax for type assertion

export default App;
