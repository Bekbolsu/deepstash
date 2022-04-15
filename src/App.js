import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Add from "./components/Add/Add";
import AdminPage from "./components/AdminPage/AdminPage";
import Collections from "./components/Collections/Collections";
import Deepstash from "./components/Deepstash/Deepstash";
import Edit from "./components/Edit/Edit";
import Fav from "./components/Fav/Fav";
import Following from "./components/Following/Following";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Kotok from "./components/Navbar2/Kotok";
import Pizda from "./components/Navbar2/Pizda";
import Phone from "./components/Phone/Phone";
import FavContextProvider from "./context/favContext";
import PostContextProvider from "./context/postContext";

function App() {
  return (
    <PostContextProvider>
      <FavContextProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/add" element={<Add />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/phone" element={<Phone />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/following" element={<Following />} />
            <Route path="/about" element={<About />} />
            <Route path="/fav" element={<Fav />} />
            <Route path="/" element={<Kotok />} />
            <Route path="/deepstash" element={<Deepstash />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </FavContextProvider>
    </PostContextProvider>

  );
}

export default App;
