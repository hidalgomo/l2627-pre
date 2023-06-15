import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Education, Home, Leadership, Titles } from './views';

const AppRoutes = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto max-w-full p-4 sm:p-6 lg:p-8">
                <Routes>
                    <Route path="education" element={ <Education /> } />
                    <Route path="/" element={ <Home /> } />
                    <Route path="leadership" element={ <Leadership /> } />
                    <Route path="titles" element={ <Titles /> } />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default AppRoutes;