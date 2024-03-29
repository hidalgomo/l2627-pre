import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Pages } from './pages';

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const classNames = (...classes) =>  classes.filter(Boolean).join(' ');

    const navigation = {
        categories: [
            {
                id: 'moreinfo',
                name: 'MORE INFO',
                featured: [
                    {
                        name: 'Unlimited Sick Leave for Employees with 9/11 Related Illnesses',
                        href: 'https://www1.nyc.gov/assets/dcas/downloads/pdf/reports/440_17.pdf',
                        imageSrc: 'https://img.freepik.com/free-vector/flat-hand-drawn-time-management-concept_23-2148822825.jpg',
                        imageAlt: 'Unlimited Sick Leave for Employees with 9/11 Related Illnesses',
                        hasTarget: true
                    },
                    {
                        name: 'Working as a Civil Servant',
                        href: 'civilservant',
                        imageSrc: 'https://cdn.dribbble.com/users/2424687/screenshots/5348661/media/a2b91fc37ceb5fc0895c0bb3d9f22e49.png?compress=1&resize=400x300&vertical=top',
                        imageAlt: 'Close up on what it is to be a civil servant and serve the City of New York.',
                    },
                ],
                sections: [
                    {
                        id: 'resources',
                        name: 'Resources',
                        items: [
                            { name: 'Salaries', href: 'salaries' },
                            { name: 'Grievances', href: 'grievances' },
                            { name: 'Benefits', href: 'benefits' },
                            { name: 'Contracts', href: 'contracts' },
                            { name: 'Meetings', href: 'meetings' },
                            { name: 'Leadership', href: 'leadership' },
                            { 
                                name: 'Local 2627\'s Constitution', 
                                href: 'https://local2627.org/resources/pdf/L2627Constitution.pdf',
                                hasTarget: true
                            },
                            { 
                                name: 'Workers\'s Comp Attorneys & Reps',
                                href: 'https://local2627.org/resources/pdf/workers_comp_attorneys_reps.pdf',
                                hasTarget: true
                            },
                        ],
                    },
                    {
                        id: 'workSafety',
                        name: 'Work Safety',
                        items: [
                            { name: 'Workplace', href: 'safety/workplace' },
                            { name: 'Citywide', href: 'safety/citywide' },
                            { name: 'CUNY', href: 'safety/cuny' },
                            { name: 'DOE', href: 'safety/doe' },
                            { name: 'MTA', href: 'safety/mta' },
                            { name: 'Citywide Air Conditioning', href: 'safety/airconditioning' }
                        ],
                    }
                ]
            }
        ]
    };

    return (
        <div className="bg-white sticky top-0 z-10">
            {/* Mobile menu */}
            <Transition.Root show={ open } as={ Fragment }>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={ setOpen }>
                    <Transition.Child as={ Fragment } enter="transition-opacity ease-linear duration-300" enterFrom="opacity-0"
                        enterTo="opacity-100" leave="transition-opacity ease-linear duration-300" leaveFrom="opacity-100" leaveTo="opacity-0">
                        
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child as={ Fragment } enter="transition ease-in-out duration-300 transform" enterFrom="-translate-x-full"
                            enterTo="translate-x-0" leave="transition ease-in-out duration-300 transform" leaveFrom="translate-x-0" 
                            leaveTo="-translate-x-full">
                            
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                <div className="flex px-4 pb-2 pt-5">
                                    <button type="button" className="-m-2 inline-flex items-center justify-center 
                                        rounded-md p-2 text-gray-400" onClick={() => setOpen(false)}>
                                        
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                <div className="space-y-6 border-t border-gray-200 px-4 py-6 uppercase">
                                    {
                                        Pages.main.map((page) => (
                                            <div key={ page.name } className="flow-root">
                                                <Link to={ page.href } className="-m-2 block p-2 font-medium text-gray-900">
                                                    { page.name }
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>

                                {/* Links */}
                                <Tab.Group as="div" className="mt-2" id='temppp'>
                                    <div className="border-b border-gray-200">
                                        <Tab.List className="-mb-px flex space-x-8 px-4">
                                            {
                                                navigation.categories.map((category) => (
                                                    <Tab key={ category.name } className={({ selected }) => classNames(selected ? 
                                                            'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                                                            'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium')}>
                                                        
                                                        { category.name }
                                                    </Tab>
                                                ))
                                            }
                                        </Tab.List>
                                    </div>
                                    <Tab.Panels as={Fragment}>
                                        {
                                            navigation.categories.map((category) => (
                                                <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                                                    <div className="grid grid-cols-2 gap-x-4">
                                                        {
                                                            category.featured.map((item) => (
                                                                <div key={ item.name } className="group relative text-sm">
                                                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                                        <img src={ item.imageSrc } alt={ item.imageAlt } className="object-cover object-center" />
                                                                    </div>
                                                                    <Link to={ item.href } className="mt-6 block font-medium text-gray-900"
                                                                        target={ item.hasTarget? '_blank' : '' }>
                                                                        
                                                                        <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                                        { item.name }
                                                                    </Link>
                                                                    <p aria-hidden="true" className="mt-1">Learn More</p>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                    {
                                                        category.sections.map((section) => (
                                                            <div key={ section.name }>
                                                                <p id={`${ category.id }-${ section.id }-heading-mobile`} className="font-medium text-gray-900">
                                                                    { section.name }
                                                                </p>
                                                                <ul aria-labelledby={`${ category.id }-${ section.id }-heading-mobile`} className="mt-6 flex flex-col space-y-6">
                                                                    {
                                                                        section.items.map((item) => (
                                                                            <li key={ item.name } className="flow-root">
                                                                                <Link to={ item.href } className="-m-2 block p-2 text-gray-500">{ item.name }</Link>
                                                                            </li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            </div>
                                                        ))
                                                    }
                                                </Tab.Panel>
                                            ))
                                        }
                                    </Tab.Panels>
                                </Tab.Group>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <header className="relative bg-white">
                <nav aria-label="Top" className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            <button type="button" className="rounded-md bg-white p-2 text-gray-400 lg:hidden" onClick={() => setOpen(true)}>
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <Link to="/">
                                    {/* <span className="sr-only">Your Company</span> */}
                                    <h1 style={{ letterSpacing: "2.5px", fontWeight: 600, fontSize: '1.05em' }}>L2627</h1>
                                    {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
                                </Link>
                            </div>

                            {/* Flyout menus */}
                            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-8">
                                    {
                                        Pages.main.map((page) => (
                                            <Link to={ page.href } key={ page.name } className="uppercase flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                                                { page.name }
                                            </Link>
                                        ))
                                    }

                                    {
                                        navigation.categories.map((category) => (
                                            <Popover key={ category.name } className="flex">
                                                {
                                                    ({ open }) => (
                                                        <>
                                                        <div className="relative flex">
                                                            <Popover.Button className={ classNames(
                                                                open ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-700 hover:text-gray-800',
                                                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                                                                )}>
                                                                    { category.name }
                                                            </Popover.Button>
                                                        </div>

                                                        <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" 
                                                            leave="transition ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
                                                            
                                                            <Popover.Panel className="absolute z-20 inset-x-0 top-full text-sm text-gray-500">
                                                                {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                                <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                                                <div className="relative bg-white">
                                                                    <div className="mx-auto max-w-7xl px-8">
                                                                        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                                                            <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                                                                {
                                                                                    category.featured.map((item) => (
                                                                                        <div key={ item.name } className="group relative text-base sm:text-sm">
                                                                                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                                                                <img src={ item.imageSrc } alt={ item.imageAlt } className="object-cover object-center" />
                                                                                            </div>

                                                                                            <Popover.Button as={ Link } to={ item.href } className="mt-6 block font-medium text-gray-900"
                                                                                                target={ item.hasTarget? '_blank' : '' }>
                                                                                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                                                                { item.name }
                                                                                            </Popover.Button>

                                                                                            <p aria-hidden="true" className="mt-1">Learn More</p>
                                                                                        </div>
                                                                                    ))
                                                                                }
                                                                            </div>
                                                                            <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                                                                {
                                                                                    category.sections.map((section) => (
                                                                                        <div key={ section.name }>
                                                                                            <p id={`${section.name}-heading`} className="font-medium text-gray-900">{ section.name }</p>
                                                                                            <ul aria-labelledby={`${section.name}-heading`} className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                                                                                {
                                                                                                    section.items.map((item) => (
                                                                                                        <li key={item.name} className="flex">
                                                                                                            <Popover.Button as={ Link } to={ item.href } className="hover:text-gray-800"
                                                                                                                target={ item.hasTarget? '_blank' : '' }>
                                                                                                                { item.name }
                                                                                                            </Popover.Button>
                                                                                                        </li>
                                                                                                    ))
                                                                                                }
                                                                                            </ul>
                                                                                        </div>
                                                                                    ))
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Popover.Panel>
                                                        </Transition>
                                                        </>
                                                    )
                                                }
                                            </Popover>
                                        ))
                                    }
                                </div>
                            </Popover.Group>

                            {/* <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <Link to="login" className="text-sm font-medium text-gray-700 hover:text-gray-800">LOGIN</Link>
                                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                                    <Link to="register" className="text-sm font-medium text-gray-700 hover:text-gray-800">REGISTER</Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}