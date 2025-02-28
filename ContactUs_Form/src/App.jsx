import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./components/Navigation/Navigation.jsx";
import ContactHeader from "./components/ContactHeader/ContactHeader.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import Button from "./components/Button/button.jsx";

function App() {
  return (
    <div>
      <Navigation />
      <ContactHeader />
      <ContactForm />
      <Button />
    </div>
  );
}

export default App;
