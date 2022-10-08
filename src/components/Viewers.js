import React from 'react'
import styled from 'styled-components'

export const Viewers = () => {
  const  data = [
    {
    img:"viewers-disney",
    vid:"1564674844-disney"
  },
    {
    img:"viewers-pixar",
    vid:"1564676714-pixar"
  },
    {
    img:"viewers-marvel",
    vid:"1564676115-marvel"
  },
    {
    img:"viewers-starwars",
    vid:"1608229455-star-wars"
  },
    {
    img:"viewers-national",
    vid:"1564676296-national-geographic"
  }
]
  return (
    <Container>
{!data? <></> : data.map((el,i)=>
  <div key={i}>
    <img src={`/images/${el.img}.png`} alt={el.im}  />
    <video autoPlay={true} loop={true} playsInline={true} src={`/videos/${el.vid}.mp4`} />
  </div>
)}

    </Container>
  )
}
const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0 26px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5,minmax(0,1fr));
    @media (max-width:768px) {
      grid-template-columns: repeat(1,minmax(0,1fr));

    }
    div{
  padding-top: 56.5%;
  border-radius: 4px;
  border: 3px solid rgb(249,249,249,0.1);
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition:all 250ms  cubic-bezier(0.25, 0.46, 0.45, 0.94) ;
  box-shadow:
   rgb(0 0 0 /69%) 0px 26px 30px -16px,
   rgb(0 0 0 /73%) 0px 16px 10px -10px;
   img{
    position: absolute;
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;

   }
   video{
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0px;
    z-index: 0;
    top: 0;
    opacity: 0;
   }

   &:hover{
  border: 3px solid rgb(249,249,249,0.8);
  transition-duration: 300;
    transform: scale(1.05);
    video{
      opacity: 1;
    }
 }
    }
`;
