import Footer from "../Components/Footer";
import Topbar from "../Components/Topbar";
import MostOrderProducts from "../Components/MostOrderProducts";
import "./Home.css"

const Home = () => {  
    return (
            <main>
                <Topbar/>
                <div className="products-heading">
                    <h2>Najczęściej kupowane przedmioty</h2>
                </div>
                <MostOrderProducts/>
                <Footer/>
            </main>
    );
  }
  
  export default Home