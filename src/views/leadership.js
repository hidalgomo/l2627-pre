const people = [
    {
        name: 'Laura Morand',
        role: 'President',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        imageUrl2: 'https://local2627.org/resources/images/LauraPirtleMorand150x255_20180808.jpg',
    },
    {
        name: 'Kalpesh Patel',
        role: '1st Vice President, DC 37 Delegate',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        imageUrl2: 'https://local2627.org/resources/images/KalpeshPatel150x225_20220203.jpg',
    },
    {
        name: 'Marie Lodescar',
        role: '2nd Vice President, DC 37 Delegate',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        imageUrl2: 'https://local2627.org/resources/images/MarieLodescar150x255_20220203.jpg',
    },
    {
        name: "Mohammad Chowdhury",
        role: "Treasurer, DC 37 Delegate",
        imageUrl2: "https://local2627.org/resources/images/MohammadChowdhury150x225_200141219.jpg"
    },
    {
        name: "Ann George",
        role: "Secretary, DC 37 Delegate",
        imageUrl2: "https://local2627.org/resources/images/AnnGeorge150x225_20200506.jpg"
    },
    {
        name: "Charles L. McClain",
        role: "Executive Board Member, DC 37 Delegate",
        imageUrl2: "https://local2627.org/resources/images/CharlesMcClain150x225_20141014.jpg"
    },
    {
        name: "George Villegas",
        role: "Executive Board Member, DC 37 Delegate",
        imageUrl2: "https://local2627.org/resources/images/GeorgeVillegas150x225_20151020.jpg"
    },
    {
        name: "Anthony Chambers",
        role: "Executive Board Member, DC 37 Delegate",
        imageUrl2: "https://local2627.org/resources/images/anthony_chambers.jpg"
    },
    {
        name: "Noel Ramos",
        role: "Executive Board Member, DC 37 Delegate",
        imageUrl2: "https://local2627.org/resources/images/NoelRamos150x225_20151020.jpg"
    },
    {
        name: "Robert Benjamin",
        role: "DC 37 Delegate",
        imageUrl2: "https://local2627.org/resources/images/RobertBenjamin150x225_20170918.jpg"
    },
    {
        name: "Marie R. Jeremie",
        role: "NYC Central Labor Council Delegate",
        imageUrl2: "https://local2627.org/resources/images/MarieJeremie150x225_20200915.jpg"
    },
    {
        name: "MD Jaman",
        role: "NYC Central Labor Council Delegate",
        imageUrl2: "https://local2627.org/resources/images/MDJaman150x255_20220203.jpg"
    },
    {
        name: "Mitchell Goldberg",
        role: "NYC Central Labor Council Delegate",
        imageUrl2: "https://local2627.org/resources/images/MitchellGoldberg150x255_20220203.jpg"
    },
    {
        name: "Kennard Gopaul",
        role: "Trustee",
        imageUrl2: "https://local2627.org/resources/images/KennardGopaul150x225_20191119.jpg"
    },
    {
        name: "William Freeman",
        role: "Trustee",
        imageUrl2: "https://local2627.org/resources/images/william_freeman.jpg"
    }
];

export function Leadership() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                        suspendisse.
                    </p>
                </div>
                <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                {
                    people.map((person) => (
                        <li key={ person.name }>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src={ person.imageUrl2 } alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{ person.name }</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">{ person.role }</p>
                                </div>
                            </div>
                        </li>
                    ))
                }
                </ul>
            </div>
        </div>
    );
}