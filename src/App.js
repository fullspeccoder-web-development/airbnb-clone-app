import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./routes/home/Home";
import Contact from "./routes/contact/Contact.route";
import Property from "./routes/property/Property.route";
import Layout from "./components/layout/Layout.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<div>ERROR</div>} />
    </Routes>
  );
}

export default App;
