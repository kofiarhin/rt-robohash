import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.styles.css";
import Header from "./components/Header/Header.component";
import Home from "./Pages/Home/Home";
import Item from "./Pages/Item/Item";
import Contact from "./Pages/Contact/Contact.page";
import About from "./Pages/About/about.page";

// app
const App = (props) => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/user/:id" element={<Item />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
