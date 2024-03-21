import {
  Info,
  Line,
  IconD,
  Input,
  Button,
  Contact,
  Section,
  InputPh,
  InputEm,
  Textarea,
  Container,
  SocialIcons,
  InuputHolder,
} from "./contact.styles.ts";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

function ContactUs() {
  return (
    <Container>
      <Contact>
        <div>
          <h4>contact us</h4>
          <h2>Send A Message</h2>
          <p>Please fill in the form if you have any question</p>
        </div>
        <div>
          <Input
            type="text"
            name="name"
            id="fullName"
            placeholder="Your name"
          />
        </div>
        <InuputHolder>
          <InputEm type="email" placeholder="Your email" />
          <InputPh type="TEXT" placeholder="phone number" />
        </InuputHolder>
        <div>
          <Textarea  placeholder="your message here" />
        </div>

        <Button>send message</Button>
      </Contact>

      <Info>
        <div>
          <h2>Get In Touch</h2>
          <p>
            let's talk business or just ave a coffee.
            <br /> we would love to hear form you
          </p>
        </div>
        <Line></Line>

        <Section>
          <IconD>
            <FaLocationDot size={"20px"} />
          </IconD>

          <div>
            <h3>Visit Us :</h3>
            <p>
              Epe Expy, Lekki Penninsula II <br />
              Lekki 106104, Lagos
            </p>
          </div>
        </Section>

        <Section>
          <IconD>
            <IoIosMail size={"25px"} />
          </IconD>

          <div>
            <h3>Mail Us :</h3>
            <p>davemak1998@gmail.com</p>
            <p>davemak1998@gmail.com</p>
          </div>
        </Section>

        <Section>
          <IconD>
            <IoCall size={"20px"} />
          </IconD>

          <div>
            <h3>Call Us :</h3>
            <p>+234 08035023355</p>
            <p>+234 08035023355</p>
            <p></p>
          </div>
        </Section>

        <SocialIcons>
          <div>
            <PiInstagramLogoFill size={"30px"} />
          </div>
          <div>
            <AiFillFacebook size={"30px"} />
          </div>
          <div>
            <FaTwitterSquare size={"30px"} />
          </div>
        </SocialIcons>
      </Info>
    </Container>
  );
}

export default ContactUs;
