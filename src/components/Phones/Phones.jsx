import { Link, useLoaderData } from "react-router-dom";

const Phones = () => {
    const allphone = useLoaderData()
    return (
        <div>
            <h1>All  phones are here : {allphone.length}</h1>
            {
                allphone.map(phone => <li key={phone.id}>
                    <Link to={`/phone/${phone.id}`}>
                        {phone.name}
                    </Link>
                </li>)
            }
        </div>
    );
};

export default Phones;