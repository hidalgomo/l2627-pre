import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Education, Home, Leadership, Titles } from './views';

const AppRoutes = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto max-w-full px-4 sm:px-6 lg:px-8" 
                style={{ paddingTop: "20px", paddingBottom: '20px' }}>

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