import { useState } from "react";
import "./App.css";
import { LoginModal } from "./components/LoginModal/LoginModal";
import { MainPage } from "./components/MainPage/MainPage";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ProfilePage } from "./components/ProfilePage/ProfilePage";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<LoginModal setIsLogin={setIsLogin} />} />
          <Route path="/library" element={<MainPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
      {/* {isLogin ? navigate("/library") : navigate("/")} */}
    </div>
  );
}

export default App;
