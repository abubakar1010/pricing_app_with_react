import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';
const PriceOption = ({data}) => {

    const {membership_type,price, description, features} = data

    console.log(data);
    return (
        <div className='bg-white shadow-xl rounded-lg border-2 px-9 flex flex-col'>
            <div className=' text-center space-y-3 py-3 text-xl'>

            <h1 className=' font-extrabold'>{membership_type}</h1>
                <p className=' font-medium'>{price}</p>

                <p className=' py-3 font-medium text-black/70 flex-grow'>{description}</p>
            </div>

            <ul className="flex-grow">
                {
                    features.map( (feature, index) => <Feature key={index} feature={feature}  />)
                }
            </ul>

            <button className=' bg-gradient-to-r from-green-600 via-green-400 to-green-700 py-3 px-8 text-white my-12 font-medium text-lg uppercase rounded-lg'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {

    data: PropTypes.object
}

export default PriceOption;