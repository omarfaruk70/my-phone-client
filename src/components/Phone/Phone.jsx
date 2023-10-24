import { useLoaderData } from "react-router-dom";

const Phone = () => {
    const phone = useLoaderData();
    console.log(phone);
    const {name, image, description, price} = phone
    return (
        <div>
            <h1>THis is a single phone</h1>

            <h3>{name}</h3>
            <img src={image} alt="" />
            <p>{description}</p>
            <p>{price}</p>
        </div>
    );
};

export default Phone;