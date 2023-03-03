import "./App.css";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import NewsPage from "./Components/NewsPage/NewsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  const [userstate, setUserState] = useState({});
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/dashboard"
            element={
              userstate && userstate.token ? (
                <Dashboard userstate={userstate} setUserState={setUserState}/>
              ) : (
                <Login setUserState={setUserState} />
              )
            }
          ></Route>
          <Route
            path="/login"
            element={<Login setUserState={setUserState} />}
          ></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/" element={<NewsPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
