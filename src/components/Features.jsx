import {useEffect, useState} from "react";

const Features = () => {
    return (
        <div className="mx-auto px-4 py-12 bg-orange-400">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                    <p className="text-gray-600 font-semibold mb-4">Get ready to bulldoze your way to the top as a
                        construction tycoon extraordinaire!</p>
                    <p className="text-gray-600">Start off with just a pocketful of cash and a whole lot of ambition to
                        build your construction empire. Buy equipment, manage your crew, and tackle the wild world of
                        construction. Rake in the dough from your projects, snag juicy contracts, and make clever
                        financial moves to fuel your company's rise. But watch out for the curveballs headed your way!
                        It's time to grab the reins and lead your construction crew to victory in this exciting online
                        management extravaganza.</p>
                    <p className="text-gray-600 mt-4">Free online management game with no download required – let the
                        fun begin!</p>
                </div>
                <div className="bg-feature rounded-lg"></div>
            </div>
        </div>


    )
};

export default Features;