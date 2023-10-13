import Header from './header';
import Footer from './footer';
import Data from './data';
import Sidebar from './sidebar';

export default function Home(){
    return(
        <div>
            <Header/>
            <Sidebar />
            <Data/>
            <Footer />
        </div>
    )
}