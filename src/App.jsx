import Footer from "./component/Footer";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Routes, Route } from 'react-router-dom'
import Login from "./component/Login";
import Register from "./component/Register";
import NotFound from "./component/NotFound";
import { MediaContextProvider } from "./component/mediaContext/MediaContext";
import Profile from "./component/Profile";

function App() {

  return (
    <>
      <MediaContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Link-Shortner/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </MediaContextProvider>
    </>
  );
}

export default App;
