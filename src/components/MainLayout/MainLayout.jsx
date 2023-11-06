import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {TripleMaze } 
    from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'

const MainLayout = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading" ? <h1 className="h-screen flex justify-center items-center "><TripleMaze></TripleMaze></h1> :
                <div className="min-h-screen">
                <Outlet></Outlet>
                </div>    
            }
            
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;