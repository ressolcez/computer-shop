import React, { useState,useEffect,useContext } from 'react'
import Topbar from '../Components/Topbar';
import Footer from '../Components/Footer';
import "./Statute.css"
import AuthServices from '../Services/AuthServices';
import StyledDivider from '../SharedComponent/StyledDivider';
import { UserContext } from '../Context/UserContext';
import UsersServices from '../Services/UsersServices';

function Statute() {

    useEffect(() => {
        if(localStorage.getItem('token')){
            AuthServices.isAuthorized().then((response) => {
              if(response.data.status === 'pass'){
                const user = {
                  userId: response.data.user_Id,
                  role: response.data.role
                }

               UsersServices.getUserById(response.data.user_Id).then ((response) =>{
                 setUserData(response.data);
               })
                setUser(user)
              }
            });
          }  
     }, []);

     const {user,setUser } = useContext(UserContext);
    
     const [userData,setUserData] = useState()

  return (
    <div className='statute__wrapper'>
        <Topbar user = {user} setUser = {setUser}/>
        <div className='single__paragraph__wrapper'>
            <div className='statute__title'>
                I. Zamówienia
            </div>
            <div className='statute__desc'>
                <p>1. Klient składa zamówienie poprzez wypełnienie formularza znajdującego sie pod adresem <a href = "order">zamówienia</a>, określa w nim towary, które zamierza kupić oraz adres na który mają zostać dostarczone towary. </p>
                <p>2. Po poprawnej weryfikacji zamówienia, Klient dostaje informacje o złożonym zamówieniu od Sprzedawcy na adres mailowy podany podczas wypłeniania formularza zamówienia. </p>
                <p>3. W wiadomości mailowej Klient otrzymuje, krótkie podsumowanie swojego zamówienia.</p>
                <p style = {{marginLeft:'2%'}}>a) Numer identyfikujący zamówienie.</p>
                <p style = {{marginLeft:'2%'}}>b) Całkowitą sumę zamówienia.</p>
                <p style = {{marginLeft:'2%'}}>c) Numer Konta sprzedawcy, na które powinny zostać przelane pieniądze w wysokości całkowitej sumy zamówienia.</p>
                <p>4. Wiadomość mailowa, wspomniana w punkcie 2. jest jedynie informacją o tym, że Sprzedawca otrzymał chęć kupna przedmiotów wybranych podczas wypłeniania formularza zamówienia, a nie potwierdzeniem realizacji zamówienia. </p>
                <p>5. Klient ma czas 5 dni od złożenia zamówienia na przelanie środków na konto Sprzedawcy, wysłane przez Sprzedawce w wiadomości mailowej do Klienta.</p>
                <p style = {{marginLeft:'2%'}}>a) Przelew, który klient realizuje dla Sprzedawcy na numer konta podany w wiadomości mailowej, musi mieć tytuł z numerem zamówienia, który Klient otrzymuje od Sprzedawcy w wiadomości Mailowej.</p>
                <p>6. Następnie Sprzedawca weryfikuje zamówienie. </p>
                <p>7. Jeżeli weryfikacja zamówienia przebiegła poprawnie oraz wysłane pieniądze od Klienta na numer konta podany przez Sprzedawce pokrywają całą sumę zamówienia oraz tytuł przelewu jest poprawnym numerem zamówienia, Sprzedawca realizuje zamówienie.  </p>
                <p style = {{marginLeft:'2%'}}>a) Jeżeli zmienia się status zamówienia Klienta, każdorazowo Klient otrzymuje informację o swoim zamówieniu w wiadomości mailowej.</p>
                <p>8. Jeżeli weryfikacja zamówienia przebiegła niepoprawnie.  </p>
                <p style = {{marginLeft:'2%'}}>a) Jeżeli użytkownik wysłał przelew z błędną kwotą, która niezgadza się z całkowitą sumą zamówienia to pieniądze te mu zostaną zwrócone na konto, z którego zostały wysłane.</p>
                <p style = {{marginLeft:'2%'}}>b) Jeżeli użytkownik wysłał przelew z błędnym numerem zamówienia to pieniądze, które Klient wysłał zostana zwrócone na konto, z którego zostały wysłane.</p>

            </div>
        </div>
        <StyledDivider/>
        <Footer/>   
    </div>
  )
}

export default Statute