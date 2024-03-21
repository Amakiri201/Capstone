import { Link } from "react-router-dom";
import { Foot, Container, Ul, Line } from "./footer.styles.ts";

function Footer() {
  return (
    <Foot>
      <Container>
        <div>
          <h1>Scissor.</h1>
        </div>

        <div>
          <Ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/features">About</Link>
            </li>
            <li>
              <Link to="/contactUs">Contact</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
          </Ul>
        </div>
      </Container>
      <Line></Line>
      <p>&copy; 2024 Scissor design with &hearts; by Amakiri David</p>
    </Foot>
  );
}

export default Footer;
