import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Benefits, Education, Grievances, Home, Leadership, Telework, Titles, EalertSignupForm } from './views';
import { Contact } from './views/contact';
import { Salaries } from './views/salaries';
import { Meetings } from './views/meetings';
import { Minutes } from './views/minutes';
import { Contracts } from './views/contracts';
import { Workplace } from './views/safety/workplace';
import { Citywide } from './views/safety/citywide';

const AppRoutes = () => { 
    return (
        <div>
            <Navbar />
            <main className="container mx-auto max-w-full p-4 sm:p-6 lg:p-8" style={{ minHeight: '500px' }}>
                <Routes>
                    <Route path="education" element={<Education />} />
                    <Route path="/" element={<Home />} />
                    <Route path="leadership" element={<Leadership />} />
                    <Route path="titles" element={<Titles />} />
                    <Route path="ealert" element={<EalertSignupForm />} />
                    <Route path="grievances" element={<Grievances />} />
                    <Route path="benefits" element={<Benefits />} />
                    <Route path="telework" element={<Telework />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="salaries" element={<Salaries />} />
                    <Route path="meetings" element={ <Meetings /> } />
                    <Route path="minutes" element={ <Minutes /> } />
                    <Route path="contracts" element={ <Contracts /> } />
                    <Route path="safety/workplace" element={ <Workplace /> } />
                    <Route path="safety/citywide" element={ <Citywide /> } />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default AppRoutes;