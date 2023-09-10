import { Link } from "react-router-dom";

const posts = [
    {
        id: 1,
        title: 'Forced Position or Promotion',
        href: '',
        description: `
            You cannot be forced to take any position or promotion. You cannot be forced to give 
            up your civil service position to take a non-civil service position. If your agency changes 
            or tries to change your civil service status without your permission, contact Local 2627 
            immediately. Be cautious, not all positions offered are protected DC 37 or union positions.
        `,
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: '',
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: 'NYCERS: Military Buy-Back',
        href: 'https://www.nycers.org/sites/main/files/file-attachments/902.pdf',
        description: `
            If you were in the military and discharged honorably you can buy back that time and apply 
            it to your pension years.
        `,
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: '',
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },  
    },
    {
        id: 3,
        title: 'Union Representation',
        href: 'https://local2627.org/resources/pdf/WeingartenRights.pdf',
        description: `You have the right to union representation during certain meetings with management.`,
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: '',
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    }
];

export function HomeSlide3() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="sm:text-3xl text-4xl font-bold tracking-tight text-gray-900">Good to know!</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn and grow with the IT Professionals of the City of New York!
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {
                    posts.map((post) => (
                        <article key={ post.id } className="flex max-w-xl flex-col items-start justify-between">
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <p>
                                        <span className="absolute inset-0" />
                                        { post.title }
                                    </p>
                                </h3>
                                <p className="mt-5 line-clamp-7 text-sm leading-6 text-gray-600">
                                    { post.description }
                                </p>
                            </div>
                            <div className="flex items-center gap-x-4 text-xs">
                                <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                                    <Link to={ post.href } target="_blank">
                                        Learn more
                                    </Link>
                                </p>
                            </div>
                        </article>
                    ))
                }
                </div>
            </div>
        </div>
    );
}