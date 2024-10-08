import { useState } from "react";
import { BsBoxArrowRight } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [userMenu, setUserMenu] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false); // State for mobile menu
    const location = useLocation(); // Get current location

    const links = [
        { path: '/home', label: 'Home' },
        { path: '/products', label: 'Products' },
        { path: '/offers', label: 'Offers' },
        { path: '/about-us', label: 'About Us' },
        { path: '/contact-us', label: 'Contact Us' },
    ];

    return (
        <div className="w-full h-[10%] flex items-center justify-center bg-background-1 shadow-custom-light">
            <div className="w-[95%] flex items-center justify-between sm:w-[85%] md:w-[90%] py-4">
                <div>
                    <div className="text-lg sm:text-2xl md:text-xl font-semibold">Shop Sphere</div>
                </div>
                <div className="hidden sm:block md:block">
                    <div className="flex items-center lg:space-x-6 md:space-x-5 sm:space-x-4 text-sm font-semibold">
                        {links.map(link => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={location.pathname === link.path ? "text-blue-500" : ""} // Change active link color
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="flex items-center space-x-4">
                        {/* Cart */}
                        <div className="relative flex items-center">
                            <div>
                                <GoPerson
                                    className="icon__style hidden sm:block md:block lg:block xl:block"
                                    onClick={() => { setUserMenu(!userMenu) }}
                                />
                            </div>

                            {userMenu && (
                                <div className="sm:block hidden ">
                                    <div className="absolute right-[-60px] p-2 top-12 flex flex-col justify-start space-y-2 rounded-sm w-[10vw] shadow-custom-heavy bg-white">
                                        <div className="flex items-center space-x-2">
                                            <GoPerson className="mini__icon" />
                                            <div className="text-xs font-semibold cursor-pointer text-gray-700">Karan Kumbhare</div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <HiOutlineShoppingCart className="mini__icon" />
                                            <div className="text-xs font-semibold cursor-pointer text-gray-700">Cart</div>
                                        </div>
                                        <div className="h-[1px] w-full bg-gray-400"></div>
                                        <div className="flex items-center space-x-2">
                                            <BsBoxArrowRight className="mini__icon" />
                                            <div className="text-xs font-semibold cursor-pointer text-gray-700">Logout</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu */}
                        <div className="sm:hidden">
                            <FaBarsStaggered
                                className="text-lg sm:text-2xl md:text-xl font-bold cursor-pointer"
                                onClick={() => setMobileMenu(!mobileMenu)} // Toggle mobile menu
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {mobileMenu && (
                <div className="absolute top-[10%] left-0 w-full bg-background-1 shadow-custom-heavy p-4 flex flex-col space-y-2">
                    {links.map(link => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={location.pathname === link.path ? "text-blue-500" : ""} // Change active link color
                            onClick={() => setMobileMenu(false)} // Close menu on click
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Navbar;
