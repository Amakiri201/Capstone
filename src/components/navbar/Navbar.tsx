// import { Link } from "react-router-dom";
// import { useState } from "react";
import {
  Ul,
  Nav,
  Child,
  Login,
  Second,
  SignUp,
  LinkDesign,
  // Mobile,
  NavContainer,
  BtnContainer,
} from "./Navbar.Styles.ts";

// import { FiMenu } from "react-icons/fi";
// import { FaTimes } from "react-icons/fa";

function Navbar() {
  // const [isMenuToggled, setIsMenuToggled] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuToggled(!isMenuToggled);
  // };

  return (
    <Nav>
      <NavContainer>
        <div>
          <h1>Scissor.</h1>
        </div>

        <Second>
          <Child>
            <Ul>
              <LinkDesign to="/">Home</LinkDesign>
              <LinkDesign to="/whyScissor">WhyScissor?</LinkDesign>
              <LinkDesign to="/features">Features</LinkDesign>
              <LinkDesign to="/contact-us">Contact</LinkDesign>
              <LinkDesign to="/Pricing">Pricing</LinkDesign>
              <Login>Login</Login>
              <SignUp>Sign up</SignUp>
            </Ul>
          </Child>

          <BtnContainer></BtnContainer>
        </Second>
      </NavContainer>
{/* 
      <Mobile>
        <MenuButton onClick={toggleMenu} isMenuToggled={isMenuToggled} />
        {isMenuToggled && (
          <>
            <MenuCloseButton onClick={toggleMenu} />
            <MobileMenuItems />
          </>
        )}
      </Mobile> */}
    </Nav>
  );
}

// // Component for NavItem
// function NavItem({ to, children }) {
//   return (
//     <li>
//       <Link to={to}>{children}</Link>
//     </li>
//   );
// }

// // Component for mobile menu button
// function MenuButton({ onClick, isMenuToggled }) {
//   return (
//     <button onClick={onClick}>
//       {isMenuToggled ? <FaTimes /> : <FiMenu />}
//     </button>
//   );
// }

// // Component for mobile menu close button
// function MenuCloseButton({ onClick }) {
//   return (
//     <button onClick={onClick}>
//       <FaTimes />
//     </button>
//   );
// }

// // Component for mobile menu items
// function MobileMenuItems() {
//   return (
//     <Ul>
//       <NavItem to="./pages/home/whyScissor">Home</NavItem>
//       <NavItem to="./pages/whyScissor/whyScissor">Why Scissor?</NavItem>
//       <NavItem to="./pages/features/features">Features</NavItem>
//       <NavItem to="./pages/contactUs/contactUs">Contact</NavItem>
//       <NavItem to="./pages/pricing/pricing">Pricing</NavItem>
//       <Login>Login</Login>
//       <SignUp>Sign up</SignUp>
//     </Ul>
//   );
// }

export default Navbar;
