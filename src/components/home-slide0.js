import picture1 from '../assets/homeslide1_1.jpg'
import picture2 from '../assets/homeslide1_2.jpg'
import picture3 from '../assets/homeslide1_3.jpg'
import picture4 from '../assets/homeslide1_4.jpg'
import picture5 from '../assets/homeslide1_5.jpg'
import picture6 from '../assets/homeslide1_6.jpg'
import picture7 from '../assets/homeslide1_7.jpg'

export function Homeslide0() {
    return (
        <div className="relative overflow-hidden bg-white" style={{ height: 'calc(100vh - 100px)' }}>
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                <div className="sm:max-w-lg">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Welcome
                    </h1>
                    <p className="mt-4 text-xl text-gray-500">
                        IT Professionals of the City of New York represents over <span className="font-bold">6,000</span> employees who work in IT 
                        titles across all City of New York agencies.
                    </p>
                </div>
                <div>
                    <div className="mt-10">
                    {/* Decorative image grid */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                    >
                        <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                        <div className="flex items-center space-x-6 lg:space-x-8">
                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                <img src={ picture1 } alt="" className="h-full w-full object-cover object-center" />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img src={ picture2 } alt="" className="h-full w-full object-cover object-center" />
                            </div>
                            </div>
                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img src={ picture3 } alt="" className="h-full w-full object-cover object-center" />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img src={ picture4 } alt="" className="h-full w-full object-cover object-center" />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img src={ picture5 } alt="" className="h-full w-full object-cover object-center" />
                            </div>
                            </div>
                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img src={ picture6 } alt="" className="h-full w-full object-cover object-center" />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img src={ picture7 } alt="" className="h-full w-full object-cover object-center" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* <a
                        href="#"
                        className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                    >
                        Shop Collection
                    </a> */}
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}