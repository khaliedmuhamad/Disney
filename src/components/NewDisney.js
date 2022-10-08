import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
export const NewDisney = () => {
  return (
    <Container>
        <h4>New Disney+</h4>
    <Content>
        <Wrap>
           <Link to='/'>
            <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/01666FAA085FF29B709DB13975E563E5E047DAAFF7D8F331201CB73F3C30027E/scale?width=400&aspectRatio=1.78&format=jpeg'  />
           </Link>
        </Wrap>
    </Content>
    </Container>
  )
}
const Container = styled.div`
    padding:0 0 26px;
`;
const  Content = styled.div`
display: grid;

grid-gap: 25px;
gap: 25px;
grid-template-columns: 1fr 1fr 1fr 1fr ;
div{
    border: 3px solid rgb(245,245,245,0.1);

}
@media (max-width:768px) {
grid-template-columns: 1fr 1fr ;
}
`;
const Wrap =styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow:
   rgb(0 0 0 /69%) 0px 26px 30px -16px,
   rgb(0 0 0 /73%) 0px 16px 10px -10px;
  cursor: pointer; 
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border :3px solid rgba(249,249,249,0.1) ;

  img{
    inset: 0;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transform: opacity 500ms ease-in-out 0s;
    width: 100%;
    top: 0;
  }
  &:hover{
    box-shadow:
   rgb(0 0 0 /80%) 0px 40px 58px -16px,
   rgb(0 0 0 /72%) 0px 30px 22px -10px;
   transform: scale(1.05);
   border-color:rgba(249,249,249,0.8) ;
  }
  `
 