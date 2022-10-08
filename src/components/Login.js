import React from 'react';
import styled from 'styled-components';
const Login = () => {
  return  (
<Container>


    <Content>
    <BgImage>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" alt="cta-logo-one" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
        Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" alt="cta-logo-one" />

      </CTA>
      </BgImage>
    </Content>


</Container>
    )
  
}
const Container = styled.section`
padding: 80px 40px;
  overflow:hidden;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;

`

const BgImage = styled.div`
height: 100%;
width: 100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
position: absolute;
inset: 0 0;
display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
background-image:url("/images/Login-background.jpg") ;
`
const Content = styled.div`
  width: 100%;
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;


`
const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin:auto ;
  width: 100%;
  transition: opacity  5s linear;
`
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`
const SignUp = styled.a`
font-weight:bold;
color: #f9f9f9;
background-color: #0063e5;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
text-align: center;
font-size: 24px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;
cursor: pointer;
&:hover{
  background-color: #0483EE;
}
`
const Description = styled.p`
width: 100%;
  color: hsl(0deg 0% 90%);
  font-size: 14px;
  margin: 0 0 24px;
  text-align:center ; 
  
`
const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
  margin-top: 20px;

`
export default Login