import React from "react";

import twitter from "./img/twitter.png";
import twitter2x from "./img/twitter2x.png";
import vkontakte from "./img/vkontakte.png";
import vkontakte2x from "./img/vkontakte2x.png";
import RSS from "./img/RSS.png";
import RSS2x from "./img/RSS2x.png";
import facebook from "./img/facebook.png";
import facebook2x from "./img/facebook2x.png";

import {
  Subscription,
  MailPattern,
  Wrapper,
  Info,
  Title,
  Text,
  SocialIcons,
  Image,
  Form,
  Email,
  Input,
  Button
} from "./styled";

export default () => {
  return (
    <Subscription>
      <div className="container">
        <div className="row">
          <div className="col-md-offset-3 col-md-6 col-xl-offset-1 col-xl-11">
            <MailPattern />
            <Wrapper>
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
                  <Input type="email" placeholder="Ваш email" />
                  <Button>Подписаться</Button>
                </Email>
              </Form>
            </Wrapper>
          </div>
        </div>
      </div>
    </Subscription>
  );
};
