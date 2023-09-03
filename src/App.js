import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
    
      <div className="">
        <Navbar />
      </div>
      <div className="mt-20  h-full ">
        <Outlet />
      </div>
      {/* <Footer/> */}
    </>
  );
}

export default App;
