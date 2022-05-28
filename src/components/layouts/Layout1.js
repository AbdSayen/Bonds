import { Outlet } from "react-router-dom"
import Layout from "../layout/Layout"

const Layout1 = () => {
    return (
        <>
            <Layout>
                <Outlet />
            </Layout>
        </>
    );
}

export default Layout1;