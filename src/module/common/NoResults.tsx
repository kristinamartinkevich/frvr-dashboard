import { Button } from "@nextui-org/react";

interface NoResultsProps {
    onButtonClick: () => void;
}

const NoResults = (props: NoResultsProps) => {
    const { onButtonClick } = props;

    return (
        <>
            <div>
                <div>
                    No results :(
                </div>
            </div>
            <div>
                <div>
                    <Button onClick={onButtonClick}>Try again</Button>
                </div>
            </div>
        </>
    );
}

export default NoResults;