import Layout from "../Layout.jsx";
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

const Buildings = () => {
    return (
        <Layout>
            {/* Navbar for Buy and Rent options */}
            <nav className="bg-gray-800 mx-10 mt-5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center h-16"> {/* Centered horizontally */}
                        <div className="flex items-center">
                            <div className="md:block">
                                <div className="flex items-baseline space-x-4 font-mono">
                                    {/* Navigation Links */}
                                    <Link to="/buy"
                                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">Buy</Link>
                                    <Link to="/rent"
                                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-semibold">Rent</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>


            {/* Content */}
            <div className="container mx-auto grid grid-cols-12 px-10">
                <div className="col-span-9 bg-amber-600">
                    <p>Building Listings</p>
                    {/* Content for building listings */}
                </div>
                <div className="col-span-3 bg-green-600">
                    <p>Details/Filter</p>
                    {/* Content for details or filter */}
                </div>
            </div>
        </Layout>
    )
}

export default Buildings;
