import './App.css';
import { Home, About, Blog, Pricing } from "./pages/pages";
import Navbar from './components/Navbar/Navbar';
import { Routes , Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="Blog" element={<Blog/>} />
        <Route path="Pricing" element={<Pricing/>} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
