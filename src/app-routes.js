import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/home';
import Education from './views/education';
import Titles from './views/titles';

const AppRoutes = () => {
    return (
        <div>
        <Navbar />
            <div className="container mx-auto max-w-full  px-4 sm:px-6 lg:px-8" style={{ paddingTop: "20px" }}>
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="education" element={ <Education /> } />
                    <Route path="titles" element={ <Titles /> } />
                </Routes>
            </div>
        </div>
    );
}

export default AppRoutes;