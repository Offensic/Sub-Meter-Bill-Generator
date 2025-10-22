import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Invoice from "./Page/Invoice";
import InputForm from "./Page/InputForm";
import { ContextProvider } from "./ContextAPI/ContextProvider.jsx";
function App() {
  return (

    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<InputForm />} />
          <Route path="/invoice" element={<Invoice />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
