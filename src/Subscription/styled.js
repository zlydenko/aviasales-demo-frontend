import styled from "styled-components";
import pattern from "./img/pattern.png";

export const Subscription = styled.section`
  display: none;
  position: relative;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const MailPattern = styled.div`
  content: "";
  display: block;
  background: #fff repeat-x url(${pattern}) 50% 0;
  height: 7px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

export const Title = styled.h3`
  margin: 0px;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  @media (min-width: 1200px) {
    text-align: left;
  }
`;

export const Text = styled.p`
  margin: 0px;
  margin-top: 4px;
  font-size: 16px;
  line-height: 22px;
  text-align: center;

  @media (min-width: 1200px) {
    text-align: left;
  }
`;

export const Image = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 8px;

  &:last-child {
    margin-right: 0px;
  }
`;

export const Button = styled.button`
  font-size: 16px;
  cursor: pointer;
  line-height: 20px;
  background: #ff8e41;
  color: #ffffff;
  border: 0;
  padding: 8px 20px 8px 20px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 1200px) {
    margin-right: 16px;
  }
`;

export const Info = styled.div`
  margin-top: 32px;
  margin-bottom: 20px;

  @media (min-width: 1200px) {
    margin-right: 170px;
  }
`;

export const Form = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 24px;

  @media (min-width: 1200px) {
    margin-top: 0px;
  }
`;

export const Email = styled.form`
  padding-bottom: 61px;
  border: 1px solid gray;
  border-radius: 2px;

  @media (min-width: 1200px) {
    padding-bottom: 0px;
    display: flex;
  }
`;

export const Input = styled.input`
  padding: 6px 9px 6px 13px;
  line-height: 20px;
  border: none;

  @media (min-width: 1200px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
