import Homepage from "./Components/Homepage/Homepage.js";
import Registration from "./Components/Registration/Registration.js";
import Dashboard from "./Components/Dashboard/Dashboard.js";
import Header from "./Components/Header.js";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route path="/registration" element={<Registration/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
