import './App.css';
import { Routes , Route } from 'react-router-dom';
import { Home, About, Blog, Pricing } from "./pages/pages";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog/:slug" element={<Blog/>} />
        <Route path="/pricing" element={<Pricing/>} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
