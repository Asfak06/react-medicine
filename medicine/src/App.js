import './App.css';
import Medicine from "./components/Table/Medicine";
import Form from "./components/Form/Form";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="medicine" element={<Medicine />} />
        <Route exact path="form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
