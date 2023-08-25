import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Home } from './views/home';
import { Education } from './views/education';
import { Leadership } from './views/leadership';
import { Titles } from './views/titles';
import { EalertSignupForm } from './views/ealert-signup-form';
import { Grievances } from './views/grievances';
import { Benefits } from './views/benefits';
import { Telework } from './views/telework';
import { Contact } from './views/contact';
import { Salaries } from './views/salaries';
import { Meetings } from './views/meetings';
import { Minutes } from './views/minutes';
import { Contracts } from './views/contracts';
import { Workplace } from './views/safety/workplace';
import { Citywide } from './views/safety/citywide';
import { CUNY } from './views/safety/cuny';
import { DOE } from './views/safety/doe';
import { MTA } from './views/safety/mta';
import { AirConditioning } from './views/safety/air-conditioning';
import NotFound from './views/error/not-found';

const AppRoutes = () => { 
    return (
        <div>
            <Navbar />
            <main className="container mx-auto max-w-full p-4 sm:p-6 lg:p-8" style={{ minHeight: '500px' }}>
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<Home />} />
                    <Route path="education" element={<Education />} />
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
                    <Route path="safety/cuny" element={ <CUNY /> } />
                    <Route path="safety/doe" element={ <DOE /> } />
                    <Route path="safety/mta" element={ <MTA /> } />
                    <Route path="safety/airconditioning" element={ <AirConditioning /> } />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default AppRoutes;