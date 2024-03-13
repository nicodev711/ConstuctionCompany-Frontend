import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-orange-400 text-white py-8">
            <div className="container mx-auto text-center">
                <p className="font-mono text-sm">&copy; 2024 Construction Tycoon. All rights reserved.</p>
                <div className="mt-4 flex justify-center items-center">
                    <a href="#" className="text-white hover:text-gray-200 mr-4">Terms of Service</a>
                    <a href="#" className="text-white hover:text-gray-200 mr-4">Privacy Policy</a>
                    <a href="#" className="text-white hover:text-gray-200 mr-4">Contact Us</a>
                    <a href="#" className="text-white hover:text-gray-200 mr-4">
                        <FontAwesomeIcon icon={faDiscord} />
                    </a>
                    <a href="#" className="text-white hover:text-gray-200 mr-4">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="#" className="text-white hover:text-gray-200 mr-4">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="#" className="text-white hover:text-gray-200">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
