import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { nonAuthenticate } from "./routes/non-authenticate";
import Layout from "./features/layout/Layout";
import "./index.css";

const { login, signup, home } = nonAuthenticate;

import InforStudent from "./pages/InforStudent";
import checkAuth from "./services/auth";

const token = checkAuth();

function App() {
  return (
    <Router>
      <Routes>
        <Route path={login.path} element={<login.component />} />
        <Route path={signup.path} element={<signup.component />} />
        <Route path={home.path} element={<home.component />} />
        {/* <Route path="/app/" element={<InforStudent />} /> */}
        <Route path="/app/*" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
