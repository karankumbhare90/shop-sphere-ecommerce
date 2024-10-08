import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

// eslint-disable-next-line react/prop-types
const LoggedInContainer = ({ children, currentActive }) => {
    return (
        <div className="h-screen w-screen overflow-x-hidden">
            <Navbar currentActive={currentActive} />
            <div>
                <div className="h-[90%] w-screen">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LoggedInContainer