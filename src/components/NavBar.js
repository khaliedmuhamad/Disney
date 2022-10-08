import React,{useEffect} from 'react';
import { useDispatch , useSelector} from "react-redux";
import { createBrowserHistory } from "history";
import { selectUserName,selectUserPhoto, setUserLoginDetails, setSignOutState } from '../features/userSlice';
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import {signInWithPopup } from "firebase/auth";
const navlist = [
  {head:"HOME",imgSrc:"/images/home-icon.svg"},
  {head:"SEARCH",imgSrc:"/images/search-icon.svg"},
  {head:"WATCHLIST",imgSrc:"/images/watchlist-icon.svg"},
  {head:"ORIGINALS",imgSrc:"/images/original-icon.svg"},
  {head:"MOVIES",imgSrc:"/images/movie-icon.svg"},
  {head:"SERIES",imgSrc:"/images/series-icon.svg"},
]
const NavBar = (props) => {


  const dispatch = useDispatch();
  const history = createBrowserHistory();
  const username = useSelector(selectUserName);
  const userphoto = useSelector(selectUserPhoto);


  const setUser = (user) =>{

    dispatch(
      setUserLoginDetails({
        name:user.displayName,
        email:user.email,
        photo:user.photo
      })
    )
  }
  useEffect(()=>{
    auth.onAuthStateChanged( (user)=>{
      if(user){
        setUser(user);
        history.push("/home")
      }else if(!user){
        history.push("/")
      }
    });
  
  },[username]);


const handelAuth = () =>{
  if(!username){
    signInWithPopup(auth,provider)
    .then(res => {setUser(res.user)
      window.location.reload(); 

    })
    .catch(err =>{
      console.log(err.massage," from sign in ")
    })}
    else if 
    (username){
      auth.signOut().then(()=>{
        dispatch(setSignOutState())
        window.location.reload(); 
      }).catch((err)=>{console.log(err,"from sign out in handelAuth function")})
    };

};


  return (
<Header>
  <Container>
    <LogoContainer>
    <HeaderLogo src="/images/logo.svg" alt="disney logo" />
    </LogoContainer>   
    <NavMenu>

{!username 
?
<>

<Login  onClick={()=> {handelAuth()}} >LOGIN </Login>

</>
:
<>
{navlist? 
<>
{    navlist.map((el,i ) =>  <a href="" key={"nav-item-"+i}>
    <img src={el.imgSrc} alt={el.head} />
    <span>{el.head}</span>
  </a>) } 
  
     
</>
  :""} 
<UserImg>
<svg stroke="currentColor" fill="#03a9f4" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"></path></svg> 
<span>
{username}

</span>
<DropDown>
<SingOut src={userphoto} alt={username} />

  <span onClick={handelAuth}>Sign Out</span>
</DropDown>
</UserImg>
</>
}

   
</NavMenu>

</Container>

</Header>
  )
}

export default NavBar
const Header = styled.div`
  width: 100%;
  position: fixed;
  background-color: #090b13;
  inset:0 0;
  height: 80px;
  z-index: 2;

`
const SingOut = styled.div`
position: relative;
 `
const DropDown = styled.div`
  position: absolute;
  right:20px;
  top: 60px;
  background: #f9f9f96b;
  color: #fdfdfd;
  font-weight: 100 !important;
  border-radius: 5px;
  padding: 3px 30px;
  font-size:20px;
  cursor: pointer;
  opacity: 0;
  box-shadow: 0 2px 3px #03a9f4;
`
const UserImg = styled.div`
color: #03a9f4;
margin-left:5px;
padding: 10px;
span{
  margin-left: 5px;
  padding: 2px;
  font-weight: 600;
}
:hover{
   
 
${DropDown}{
  opacity: 1;
  transition: all 0.5s linear;
 }
}
`
const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding:0 3% ;
  justify-content: space-between;
  align-items: center;
`
const HeaderLogo = styled.img`
  width: 100%;
`
const Log = styled.a`
  display: block;
`
const LogoContainer = styled.a`
  width: 100px;
  display: block;
  cursor: pointer;
`

 const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  padding: 0;
  position: relative;

 a{
  display: flex;
  align-items: center;
  padding: 0 12px;
  img{
    width: 20px;
    height: 20px;
    min-width: 20px;
    z-index: auto;
  }
  span{
    color: rgb(249,249,249);
    font-size: 18px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding: 3px 0;
    white-space: nowrap;
    position: relative;
  

  &::before{
    
    background-color: rgb(249,249,249);
    border-radius: 0 0 4px 4px;
    right: 0px;
    width: auto;
    content: "";
    height: 2px;
    opacity: 0;
    bottom: -6px;
    position: absolute;
    left: 0px;
    visibility: hidden;
    transform-origin: left center;
    transform: scaleX(0);
    transition: all .45s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  }

 } 
 
  &:hover{
    span:before{
      opacity: 1 !important;
    transform: scaleX(1);
    visibility: visible;
    }
  }
 }

 `;
 const Login = styled.a`
  cursor: pointer;
  background-color: rgba(0,0,0,0.5);
  border: 2px solid rgba(240,240,240,0.5);
  letter-spacing: 1.5px;
  padding: 8px 16px;
  border-radius: 5px;
  transition: all 0.2s ease-in 0s;
  font-size: 18px;

  &:hover{
    background-color: rgba(249,249,249,0.9);
    color: #000;
    border-color: none;
  }
 `
