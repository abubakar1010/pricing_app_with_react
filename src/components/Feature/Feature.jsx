import PropTypes from "prop-types"
import { FaCircleCheck } from "react-icons/fa6";
const Feature = ({feature}) => {
    return (
        <>
        <div className="flex items-center gap-3 space-y-3">

        <FaCircleCheck className=" text-green-500" />
            <li>{feature}</li>
        </div>
        </>
    );
};

Feature.propTypes = {

    feature: PropTypes.string
}

export default Feature;