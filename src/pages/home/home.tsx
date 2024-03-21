import {
  HeroSession,
  Input,
  ShortenBtn,
  Session,
  Container,
} from "./home.style.ts";



function Home() {
  return (

    <Container>
      <HeroSession>
        <h1>URL Shortener</h1>
        <h2>Paste your untidy link to shorten it</h2>
        <p>
          free tool to shorten URL or reduce a link. Use our URL shortener to
          create a<br /> shortened & neat link making t easy to remember
        </p>
        <Session>
          <Input type="text" placeholder="Paste your link here" />
          <ShortenBtn>Shorten</ShortenBtn>
        </Session>
      </HeroSession>
    </Container>
  );
}

export default Home;
