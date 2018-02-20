import React from "react";
import styled from "styled-components";
import pattern from "./pattern.png";
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
  position: relative;

  @media (min-width: 768px) {
    display: block;
  }
`;

const MailPattern = styled.div`
  content: "";
  display: block;
  background: #fff repeat-x url(${pattern}) 50% 0;
  height: 7px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

const Title = styled.h3`
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
  margin-top: 4px;
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
  margin-right: 8px;

  &:last-child {
    margin-right: 0px;
  }
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

  @media (min-width: 1200px) {
    margin-right: 16px;
  }
`;

const Info = styled.div`
  margin-top: 32px;
  margin-bottom: 20px;

  @media (min-width: 1200px) {
    margin-right: 170px;
  }
`;

const Form = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 24px;

  @media (min-width: 1200px) {
    margin-top: 0px;
  }
`;

const Email = styled.form`
  padding-bottom: 61px;

  @media (min-width: 1200px) {
    padding-bottom: 0px;
    display: flex;
  }
`;

const Input = styled.input`
  padding: 6px 9px 6px 13px;
  line-height: 20px;

  @media (min-width: 1200px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

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
