import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <section className="flex justify-between px-12 p-8 shadow-lg">
            <h1 className="text-xl font-bold">Amajhon</h1>
            <nav className="flex gap-5 ">
                <NavLink className={({isActive})=> isActive? "bg-blue-600 text-white": ""} to="/">Home</NavLink>
                <NavLink className={({isActive})=> isActive? "bg-blue-600 text-white": ""} to="/products">Products</NavLink>
                <NavLink className={({isActive})=> isActive? "bg-blue-600 text-white": ""} to="/dashboard">Dashboard</NavLink>
            </nav>
        </section>
    );
};

export default Header;