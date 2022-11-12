import React, {useEffect,useContext} from 'react';
import { UserContext } from '../Context/UserContext';
import Footer from '../Components/Footer';
import Topbar from '../Components/Topbar';
import CategoryComponent from '../CategoryComponents/CategoryComponent';
import AuthServices from '../Services/AuthServices';
import StyledDivider from '../SharedComponent/StyledDivider';
import "./Category.css";

function Category() {

  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    if(localStorage.getItem('token')){
        AuthServices.isAuthorized().then((response) => {
          if(response.data.status === 'pass'){
            const user = {
              userId: response.data.user_Id,
              role: response.data.role
            }
            setUser(user)
          }
        });
      }  
 }, []);

  return (
    <div className="category__wrappper">
      <Topbar user = {user} setUser = {setUser}/>
      <CategoryComponent/>
      <StyledDivider/>
      <Footer/>
    </div>
  )
}

export default Category