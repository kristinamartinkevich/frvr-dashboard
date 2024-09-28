import { Spinner } from "@nextui-org/react";


function Loader() {
    return (
        <div className="h-full flex items-center justify-center w-full">
            <div className="p-8 text-center">
                <Spinner />
            </div>
        </div>
    );
}

export default Loader;