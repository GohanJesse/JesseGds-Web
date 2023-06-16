import { Routes, Route } from "react-router-dom";
import Home from "./components/Mains/Home/Home";
import Skills from "./components/Mains/Skills/Skills";
import Training from "./components/Mains/Training/Training";
import SelfTraining from "./components/Mains/SelfTraining/SelfTraining";
import About from "./components/Mains/About/About";
import NotFound from "./components/Mains/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Training" element={<Training />} />
        <Route path="/Training/:id" element={<Training />} />
        <Route path="/SelfTraining" element={<SelfTraining />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;