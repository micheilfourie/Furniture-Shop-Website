import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./Components/index.js";
import {
  Home,
  About,
  Contact,
  Shop,
  Blog,
  ShoppingCart,
} from "./Pages/index.js";

function App() {
  return (
    <Router basename="/Furniture-Shop-Website/">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}

export default App;
