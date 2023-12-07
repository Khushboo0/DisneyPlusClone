import styled, { css } from "styled-components";
export const Header = () => {
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="logo" />
      </Logo>
      <Navmenu>
        <a>
            <img src="/images/home-icon.svg" alt="home"/>
            <span>HOME</span>
        </a>
      </Navmenu>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 0 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
  background-color: #090b13;
  height: 70px;
  letter-spacing: 16px;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;
const Navmenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  margin-left: 25px;
  margin-right: auto;
  position: relative;

  a{
    display: flex;
    align-items: center;
    padding: 0 12px;
  }
  img{
    height: 20px;
    width: 20px;
    z-index: auto;
  }
  span{
    padding: 0 2px;
    font-size: 13px;
    letter-spacing: 1.45px;
    line-height: 1.08;
    position: relative;

    &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
        span:before {
          transform: scaleX(1);
          visibility: visible;
          opacity: 1 !important;
        }
      }
    }

  @media (max-width: 768px) {
    display: none;
  }
`;
