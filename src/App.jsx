import { useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Navigation from "./routes/Navigation";
import SignIn from "./routes/SignIn";
import Shop from "./routes/Shop";
import CheckOutPage from "./routes/CheckOutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="checkout" element={<CheckOutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
