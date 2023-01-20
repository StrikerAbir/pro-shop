
import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";


const Layout = ({ children}) => {
    return (
        <div>
            <NavBar></NavBar>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    );
};

export default Layout;