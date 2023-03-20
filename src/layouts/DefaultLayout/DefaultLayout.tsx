import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

export function DefaultLayout(){
    return(
        <div>
            <Header/>
            <Outlet/>
            <Footer/>

        </div>
    )
}