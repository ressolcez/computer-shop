import Footer from "../Components/Footer";
import Topbar from "../Components/Topbar";
import MostOrderProducts from "../Components/MostOrderProducts";
import "./Home.css"
import Slider from "../Components/Slider";
import DiscountProducts from "../Components/DiscountProducts";
import Categories from "../Components/Categories";
import Divider from '@mui/material/Divider';
import styled from 'styled-components';
import RecommendedProducts from "../Components/RecommendedProducts";

const StyledDivider = styled(Divider)`
  background-color: black;
`
const Home = () => {  
    return (
            <main className="home__wrapper">
                <Topbar/>
                <Slider/>
                <StyledDivider/>
                <div className="products-heading">
                    <h2>Kategorie</h2>
                </div>
                <Categories/>
                <StyledDivider/>
                <div className="products-heading">
                    <h2>Najczęściej kupowane przedmioty</h2>
                </div>
                <MostOrderProducts/>
                <StyledDivider/>
                <div className="products-heading">
                    <h2>Przeceny!</h2>
                </div>
                <DiscountProducts/>
                <StyledDivider/>
                <div className="products-heading">
                    <h2>Najlepiej oceniane produkty!</h2>
                </div>
                <RecommendedProducts/>
                <StyledDivider/>
                <Footer/>
            </main>
    );
  }
  
  export default Home