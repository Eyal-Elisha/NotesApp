import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NotesPage from "../pages/NotesPage";
import AboutPage from "../pages/Aboutpage";
import Navbar from "../components/Navbar";

const AppRouter = () => {
    return(
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<NotesPage/>}/>
            <Route path="/about" element = {<AboutPage/>}/>
        </Routes>      
      </Router>  
    );

}
export default AppRouter;