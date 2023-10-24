import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to={'/phones'}>Phones</Link>
            <h1>This is header</h1>
        </div>
    );
};

export default Header;