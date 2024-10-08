import LoggedInContainer from "../../containers/LoggedInContainer"
import productData from "../../Data/productData"
import SectionHeading from "../shared/SectionHeading"
import ProductCard from "./ProductCard"

const Home = () => {

    return (
        <LoggedInContainer currentActive={"home"}>
            <div className="div__style mb-10">
                <div className="w-[95%] sm:w-[85%] md:w-[90%] ">
                    <div>
                        <SectionHeading>Products</SectionHeading>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center gap-5">
                        {
                            productData.map((product, index) => {
                                return (
                                    <ProductCard key={index} product={product} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </LoggedInContainer>
    )
}

export default Home