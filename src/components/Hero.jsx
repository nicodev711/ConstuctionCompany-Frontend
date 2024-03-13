import {NavLink} from "react-router-dom";

const Hero = () => {
    return (
        <div className="relative bg-hero bg-cover bg-center h-80 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="z-10 text-white text-center h-56">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono h-16 font-bold mb-4">CONSTRUCTOPOLIS</h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-8">Build Your Empire in the World of Construction
                    Management</p>
                <NavLink to={"/login"}
                         className={"bg-orange-400 hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-full inline-block transition duration-300"}>Start
                    Building Now</NavLink>
            </div>
        </div>
    )
};

export default Hero;