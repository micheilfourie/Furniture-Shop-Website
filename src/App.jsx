import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Shop,
  Blog,
  Wishlist,
  ShoppingCart,
} from "./Pages/index.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Router>
  );
}

export default App;
