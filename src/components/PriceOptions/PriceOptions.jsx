import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const [data, setData] = useState([])

    useEffect( () => {

        fetch('priceOption.json')
        .then( response => response.json())
        .then( response => setData(response))
    },[])
    return (
        <>
            <div className=" container mx-auto my-8 grid grid-cols-1 md:grid-cols-2 gap-20 "> 

                {
                    data.map( data => <PriceOption key={data.id} data={data} /> )
                }

                

            </div>
        </>
    );
    
};

export default PriceOptions;