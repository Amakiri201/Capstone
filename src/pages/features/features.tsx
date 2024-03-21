import { IoMdKey } from "react-icons/io";
import { TbActivityHeartbeat } from "react-icons/tb";
import { IoLink } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { Container, CardsWrapper, Card } from "./features.styles.ts";

export const Feature = () => {
  return (
    <Container>
      <div>
        <h1>
          <strong>FEATURES</strong> - WHAT WE OFFER
        </h1>
      </div>

      <CardsWrapper>
        <Card>
          <IoLink size={50} />
          <h3>URL Shortening</h3>
          <p>
            Scissor allows users to shorten URLs by pasting a long URL into the
            Scissor platform, and a shorter URL is automatically generated. The
            shortened URL is designed to be as fast as possible, making sharing
            on social media or other channels easy
          </p>
        </Card>

        <Card>
          <IoMdKey size={50} />
          <h3>Custom URLs</h3>
          <p>
            Scissor also allows users to customize their shortened URLs. Users
            can choose their custom domain name and customize the URL to reflect
            their brand or content. This feature is handy for individuals or
            small businesses who want to create branded links for their
          </p>
        </Card>

        <Card>
          <IoMdSettings size={50} />

          <h3>QR Code Generation</h3>
          <p>
            Scissor also allows users to generate QR codes for the shortened
            URLs. Users can download and use the QR code image in their
            promotional materials or/or on their website. This feature will be
            implemented using a third-party QR code generator API, which can be
            integrated into the Scissor platform.
          </p>
        </Card>

        <Card>
        <TbActivityHeartbeat size={50} />

          <h3>DATA ANALYTICS</h3>
          <p>
            Scissor provides basic analytics that allows users to track the
            performance of their shortened URLs. Users can see how many clicks
            their shortened URL has received and where the clicks are coming
            from. This feature will be implemented using Firebase’s built-in
            analytics feature.
          </p>
        </Card>
      </CardsWrapper>
    </Container>
  );
};

export default Feature;
