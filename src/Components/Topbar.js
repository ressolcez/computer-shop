
import './Topbar.css'
import Logo from "../Images/Logo.png"
import ShoppingCart from "../Images/shopping_cart.png"
import User from "../Images/user.png"
import BookData from "../Data.json"
import SearchBar from './SearchBar'

function Topbar() {
    return (
        <div className="topbar__wrapper" role="navigation">

            <div className="topbar__leftBox">
                <img src={Logo} alt="Logo" className= "topbar__img"/>
            </div>
            <div className="topbar__middleBox">
                <SearchBar data={BookData}/>
            </div>

            <div className="topbar__rightBox">
                <div className = "topbar__rightBox__account">
                <img src={User} alt = "User"/>
                <span className = "topbar__rightBox_spanItem">Twoje konto</span>
                </div>
                    <div className = "topbar__rightBox__cart">
                            <img src={ShoppingCart} alt = "ShoppingCart"/>
                            <span className = "topbar__rightBox_spanItem">Twój Koszyk</span>
                    </div>
            </div>

        </div>
    )
  }
  
  export default Topbar