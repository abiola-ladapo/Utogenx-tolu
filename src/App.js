import './App.css';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Service1 from './Components/Services1/Service1';
import Blog from './Components/Blog/Blog';
import New from './Components/News/New';
import Footer from './Components/Footer/Footer';

function App() {
  return (

    <div className="App container">
     <Home/>
     <Services/>
     <Service1/>
     <Blog/>
     <New/>
     <Footer/>
    </div>
  );
}

export default App;
