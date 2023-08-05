import { Outlet } from "react-router-dom";
import { Header, Main } from "../../components";



export const MainLayout = () => {
    return (
        <>
            <Header/>
            <Main>
                <Outlet/>
            </Main>
        </>
    )
}