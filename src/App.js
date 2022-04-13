import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Add from "./components/Add/Add";
import AdminPage from "./components/AdminPage/AdminPage";
import Collections from "./components/Collections/Collections";
import Edit from "./components/Edit/Edit";
import Following from "./components/Following/Following";
import Navbar from "./components/Navbar/Navbar";
import Navbar2 from "./components/Navbar2/Navbar2";
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
            <Route path="/" element={<Navbar2 />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/phone" element={<Phone />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/following" element={<Following />} />
          </Routes>
        </BrowserRouter>
      </FavContextProvider>
    </PostContextProvider>
  );
}

export default App;
