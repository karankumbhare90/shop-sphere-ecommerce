import { Link } from "react-router-dom";

const Footer = () => {
    const links = [
        { path: '/home', label: 'Home' },
        { path: '/products', label: 'Products' },
        { path: '/offers', label: 'Offers' },
        { path: '/about-us', label: 'About Us' },
        { path: '/contact-us', label: 'Contact Us' },
    ];

    return (
        <div className="bg-black text-white py-4 mb-2">
            <div className="w-[95%] sm:w-[85%] md:w-[90%] mx-auto flex flex-col items-center">
                <div className="flex space-x-4">
                    {links.map(link => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="text-sm hover:underline"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className="mt-2 text-xs text-gray-400">© 2024 Shop Sphere. All rights reserved.</div>
            </div>
        </div>
    );
};

export default Footer;
