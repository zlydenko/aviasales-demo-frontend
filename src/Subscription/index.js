import React from "react";
import styled from "styled-components";
import mailpatterntablet from "./mailpatterntablet.png";
import mailpatterntablet2x from "./mailpatterntablet2x.png";
import mailpatterndesktop from "./mailpatterndesktop.png";
import mailpatterndesktop2x from "./mailpatterndesktop2x.png";
import twitter from "./twitter.png";
import twitter2x from "./twitter2x.png";
import vkontakte from "./vkontakte.png";
import vkontakte2x from "./vkontakte2x.png";
import RSS from "./RSS.png";
import RSS2x from "./RSS2x.png";
import facebook from "./facebook.png";
import facebook2x from "./facebook2x.png";

const Subscription = styled.section`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-bottom: 61px;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    padding-bottom: 24px;
  }
`;

const Title = styled.h2`
  margin: 0px;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  @media (min-width: 1200px) {
    text-align: left;
  }
`;
const Text = styled.p`
  margin: 0px;
  font-size: 16px;
  line-height: 22px;
  text-align: center;

  @media (min-width: 1200px) {
    text-align: left;
  }
`;

const Image = styled.img`
  width: 36px;
  height: 36px;
`;

const Button = styled.button`
  font-size: 16px;
  cursor: pointer;
  line-height: 20px;
  background: #ff8e41;
  color: #ffffff;
  border: 0;
  padding: 8px 20px 8px 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
`;

const Info = styled.div`
  margin-right: 160px;
`;

export default () => {
  return (
    <div className="row center-md">
      <div className="col-md-6 col-lg-10">
        <Subscription>
          <picture>
            <source
              media="(min-width:768px)"
              src={mailpatterntablet}
              srcSet={`${mailpatterntablet2x} 2x`}
              alt=""
            />
            <source
              media="(min-width:1440px)"
              src={mailpatterndesktop}
              srcSet={`${mailpatterndesktop2x} 2x`}
              alt=""
            />
          </picture>
          <Info>
            <Title>Хотите знать всё о скидках на авиабилеты?</Title>
            <Text>
              Вы можете подписаться на нашу рассылку через соцсети или по
              электронной почте.
            </Text>
          </Info>
          <SocialIcons>
            <Image src={twitter} srcSet={`${twitter2x} 2x`} alt="" />
            <Image src={facebook} srcSet={`${facebook2x} 2x`} alt="" />
            <Image src={vkontakte} srcSet={`${vkontakte2x} 2x`} alt="" />
            <Image src={RSS} srcSet={`${RSS2x} 2x`} alt="" />
          </SocialIcons>
          <Form>
            <Email>
              <Input type="email" />
              <Button>Подписаться</Button>
            </Email>
          </Form>
        </Subscription>
      </div>
    </div>
  );
};
