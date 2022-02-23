import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.component";
import Home from "./Pages/Home/Home";
import Item from "./Pages/Item/Item";
import "./app.styles.css";
const App = (props) => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/user/:id" element={<Item />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
