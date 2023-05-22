import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./Frontend/Form";
import Login from "./Frontend/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index exact path="/" element={<Form />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
