import React from 'react';
import styled, { css } from 'styled-components';
 export const DisneyLogin = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          <SignUp>GET ALL HERE</SignUp>
          <Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
        {/* <BgImage /> */}
      </Content>
    </Container>
  );
}

const Container= styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;

`;
const Content= styled.div`
background-image: url(/images/login-background.jpg);
margin-bottom: 10vw;
width: 100%;
position: relative;
min-height: 100vh;
display: flex;
justify-content: center;    
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;`;

// const BgImage = styled.div`

// height: 100%;
// background-position: top;
// background-size: cover;
// background-repeat: no-repeat;
// position: absolute;
// top: 0;
// right: 0;
// left: 0;

// `;

const CTA = styled.div`

margin-bottom: 2vw;
    max-width: 650px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width: 100%;
`;
const CTALogoOne = styled.img`
margin-bottom: 12px;
    
   
    max-width: 600px;
   
    display: block;
    width: 100%;
`;

const SignUp= styled.a`
font-weight: bold;
    color: #ffffff;
    background-color: #0063e5;
    width: 100%;
    font-size: 18px;
    margin-bottom: 12px;
    letter-spacing: 1.5px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    &:hover{
        background-color: #0483ee;
    }


`;

const Description = styled.p`
color: hsla(0,0%,95.3%,1);
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
margin-bottom: 20px;
    max-width: 600px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;`;