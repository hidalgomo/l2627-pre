import { Banner } from "../components/banner";
import EmblaCarousel from "../components/embla-carousel";
import '../css/embla.css'

const OPTIONS = { align: 'start', dragFree: false }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export function Home2() {
    return (
        <div className="-m-4 sm:-m-6 lg:-m-8" style={{ width: '100vw', height: '100vh' }}>
            <Banner />
            <EmblaCarousel slides={ SLIDES } options={ OPTIONS } />
        </div>
    );
}