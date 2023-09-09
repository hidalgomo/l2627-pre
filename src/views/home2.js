import EmblaCarousel from "../components/embla-carousel";
import '../css/embla.css'

const OPTIONS = { align: 'start', dragFree: false }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export function Home2() {
    return (
        <div className="-m-4 sm:-m-6 lg:-m-8" style={{ width: '100vw', height: '100vh' }}>
            {/* <div className="py-24 sm:py-32 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Welcome</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        IT Professionals of the City of New York represents over 6,000 employees who work in IT 
                        titles across all City of New York agencies.
                    </p>
                </div>
            </div> */}

            <EmblaCarousel slides={ SLIDES } options={ OPTIONS } />
        </div>
    );
}