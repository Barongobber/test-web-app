import { BrowserRouter as Router, 
  Routes,
  Route, 
  Navigate
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import HomePage from "./pages/HomePage/HomePage";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to={"/homepage"} />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
