import {
  Container,
  BtnWrapper,
  CardWrapper,
  Card,
  StartedBtn,
  BtnMonthly,
  BtnYearly,
} from "./pricing.styles.ts";

export const Pricing = () => {
  return (
    <Container>
      <div>
        <h1>A price perfect for your needs</h1>
        <p>
          Custom shots links, powerful dashboard, detailed analytics, API, QR
          codes,
          <br />
          From catering for your personal, business, event, socials needs, you
          can be rest assured we have you in mind in our pricing.
        </p>

        <BtnWrapper>
          <BtnMonthly>Monthly</BtnMonthly>
          <BtnYearly>Yearly</BtnYearly>
        </BtnWrapper>
      </div>

      <CardWrapper>
        <Card>
          <h2>Basic</h2>
          <h3>$0</h3>
          <p>Free plan for all users</p>
          <p>Unlimited URL Shortening</p>
          <p>Basic Link Analytics</p>
          <p>Customizable Short Links</p>
          <p>Standard Support</p>
          <p>Ad-supported</p>
          <StartedBtn>Get started</StartedBtn>
        </Card>

        <Card>
          <h2>Professional</h2>
          <h3>$15</h3>
          <p>Ideal for business creators</p>
          <p>Enhanced Link Analytics</p>
          <p>Custom Branded Domains</p>
          <p>Priority Support</p>
          <p>Ad-free Experience</p>
          <p>Ideal for business creators</p>
          <StartedBtn>Get started</StartedBtn>
        </Card>

        <Card>
          <h2>Teams</h2>
          <h3>$25</h3>
          <p>Share with up to 10 users</p>
          <p>User Roles and Permissions</p>
          <p>Custom Branded Domains</p>
          <p>Enhanced Security</p>
          <p>API Access</p>
          <p>Dedicated Account Manager</p>
          <StartedBtn>Get started</StartedBtn>
        </Card>
      </CardWrapper>
    </Container>
  );
};

export default Pricing;
