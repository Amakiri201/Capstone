import videoBg from "../../assets/why.mp4";
import { Container, Info, Session, Link } from "./why.styles.ts";

export const WhyScissor = () => {
  return (
    <Container>
      <Info>
        <h1>
          Why Choose <strong>Scissor?</strong>
        </h1>
        <p>
          Scissors is the hub of everything that has to do with your link
          management. We shorten your URLs, allow you creating custom ones for
          your personal, business, event usage. Our swift QR code creation,
          management and usage tracking with advance analytics for all of these
          is second to none.
         
        </p>
        <Link>LEARN MORE ABOUT US</Link>
      </Info>

      <Session>
        <video src={videoBg} autoPlay loop muted></video>
      </Session>
    </Container>
  );
};

export default WhyScissor;
