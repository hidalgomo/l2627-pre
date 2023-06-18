import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Benefits, Education, Grievances, Home, Leadership, Telework, Titles, EalertSignupForm } from './views';

const AppRoutes = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto max-w-full p-4 sm:p-6 lg:p-8">
                <Routes>
                    <Route path="education" element={<Education />} />
                    <Route path="/" element={<Home />} />
                    <Route path="leadership" element={<Leadership />} />
                    <Route path="titles" element={<Titles />} />
                    <Route path="ealert" element={<EalertSignupForm />} />
                    <Route path="grievances" element={<Grievances />} />
                    <Route path="benefits" element={<Benefits />} />
                    <Route path="telework" element={<Telework />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default AppRoutes;