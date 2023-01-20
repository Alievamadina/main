import { Route, Routes } from "react-router-dom";
import "./App.css";
import Usestate from "./components/useState/Usestate";
import Navbar from "./Layout/Navbar";
function App() {
  return (
    <>
      <Routes>
        <Route path="/"element={<Navbar/>}>

          <Route path="usestate" element={<Usestate/>} />
          <Route path="" element />
        </Route>
      </Routes>
    </>
  );
}

export default App;
