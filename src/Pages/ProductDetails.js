import React, {useState,useEffect,useContext} from 'react';
import {UserContext} from '../Context/UserContext';
import {useParams} from "react-router-dom";
import Topbar from '../Components/Topbar';
import Footer from '../Components/Footer';
import ItemDetail from '../ProductDetailComponents/ItemDetail';
import Opinions from '../ProductDetailComponents/Opinions';
import AddOpinion from '../ProductDetailComponents/AddOpinion';
import ProductDetailsServices from "../Services/ProductDetailsServices";
import OpinionsService from '../Services/OpinionsService';
import AuthServices from '../Services/AuthServices';
import StyledDivider from '../SharedComponent/StyledDivider';
import SnackbarSuccess from '../SharedComponent/SnackbarSuccess';
import SnackbarFail from '../SharedComponent/SnackbarFail';
import WaitPage from '../SharedComponent/WaitPage';
import "./ProductDetails.css";

export default function ProductDetails() {
  
  let { id } = useParams();
  const [product, setProduct] = useState([]);
  const [details, setDetails] = useState([]);
  const [opinions, setOpinions] = useState([]);
  const [page, setPage] = useState(1);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(1);
  const [opinionRate, setOpinionRate] = useState([]);
  const {user,setUser } = useContext(UserContext);
  const [state, setState] = useState(1);
  const [message,setMessage] = useState('');
  const [loading,setLoading] = useState(true);
  const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState(false);
  const [openSnackbarFail, setOpenSnackbarFail] = useState(false);
  const handleCloseSnackbarSuccess = () => setOpenSnackbarSuccess(false);
  const handleCloseSnackbarFail = () =>  setOpenSnackbarFail(false);
  
  const deleteOpinion = (opinionId) => {
      OpinionsService.deleteOpinion(opinionId).then(() => {
        setMessage("Poprawnie usunięto opinie");
        setOpenSnackbarSuccess(true);
      }).catch(() => {
        setMessage("Opinia nie została usunięta");
        setOpenSnackbarFail(true);
      });
    setState(prev => prev+1);
  }

  useEffect(() => {

      const getHomePageContent = async () => {
        const productById = await ProductDetailsServices.getProductById(id);
        const opinionsToProduct = await OpinionsService.getOpinionsToProduct(id,page-1);
        const opinionToProductRate = await OpinionsService.getOpinionToProductRate(id);

        const authorizedFunction = () => {
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
        }
          Promise.all([productById, opinionsToProduct,opinionToProductRate]).then(function(response) {   
            authorizedFunction();
            setProduct(response[0].data.product);
            setDetails(response[0].data.details);
            setOpinions(response[1].data.opinions);
            setTotalNumberOfPages(response[1].data.totalPages);
            setOpinionRate(response[2].data);
          })
      }

      
      getHomePageContent().then (() =>{
        setLoading(false)
      }).catch ((error) =>{
        console.log(error)
        setLoading(true)
      })

    }, [page,state]);


    if(loading) return <WaitPage/>

  return (
    <div className='Product__Detail__Wrapper'>
        <Topbar user= {user} setUser = {setUser}/>
        <div style= {{flex:1}}>
          <ItemDetail product = {product}/>
          <StyledDivider/>
          {/*
            <h2 className='title__product__details'>Specyfikacja:</h2>
            <Specyfication details = {details}/>
          */}
          <h2 className='title__product__details'>Opinie:</h2>
          <Opinions opinions = {opinions} setPage = {setPage} totalNumberOfPages = {totalNumberOfPages} opinionRate = {opinionRate} deleteOpinion = {deleteOpinion} user = {user}/>
          <h2 className='title__product__details'>Dodaj opinie:</h2>
          <AddOpinion productId = {product.id} user = {user}/>
          <StyledDivider/>
          </div>
        <Footer/>
        <SnackbarSuccess openSnackbarSuccess = {openSnackbarSuccess} handleCloseSnackbarSuccess = {handleCloseSnackbarSuccess} message = {message}/>
        <SnackbarFail openSnackbarFail = {openSnackbarFail} handleCloseSnackbarFail = {handleCloseSnackbarFail} message = {{comment: message}}/>
    </div>
  )
}
