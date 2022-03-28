import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Aside from './components/Aside';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return (
   
      <div className='wrapper'>
        <header className='header'> <Header /></header>
        <aside className='aside'><Aside /></aside>
        <main className='main'><Main/></main>
        <footer className='footer'><Footer/></footer>
      </div>
  
  );
}

export default App;
