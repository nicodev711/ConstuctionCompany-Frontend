import ContractsNotifs from "./ContractsNotifs.jsx";

const LayoutUserHP = () => {
    return (
        <div className="container mt-10 mx-auto grid grid-cols-12 px-10">
            <div className="col-span-9 bg-amber-600">
                <p>Col 1</p>
            </div>
            <div className="col-span-3 bg-green-600">
                <p>Col 2</p>
                <ContractsNotifs/>
            </div>
        </div>

    )
};

export default LayoutUserHP;