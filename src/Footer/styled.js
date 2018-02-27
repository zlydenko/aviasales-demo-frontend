import styled from "styled-components";

export const Title = styled.h2`
  margin: 0px;
  margin-bottom: 16px;
  font-size: 15px;
  line-height: 16px;
  color: #4a4a4a;
  font-weight: 500;
  text-transform: uppercase;
`;

export const Link = styled.a`
  display: block;
  text-decoration: none;
  color: #5b5b5c;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 12px;
`;

export const MoreLink = Link.extend`
  font-size: 14px;
  color: #4a4a4a;
  margin-bottom: 0px;
  margin-top: 4px;
  font-weight: 500;
`;

export const LinkList = styled.div`
  margin-bottom: 30px;
`;

export const Links = styled.div`
  padding-top: 32px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e6e8;
  margin-bottom: 24px;
`;

export const LegalLink = Link.extend`
  display: inline-block;
  margin-right: 5px;
`;

export const SocialLink = Link.extend`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

export const SocialIcon = styled.img`
  margin-right: 5px;
`;

export const Download = styled.div`
  margin-top: 24px;
`;

export const DownloadLink = styled.a`
  display: block;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 1200px) {
    display: inline-block;
  }
`;

export const LegalInfo = styled.p`
  margin-top: 16px;
  margin-bottom: 24px;
  font-size: 12px;
  line-height: 16px;
  color: #5b5b5c;
`;

export const Img = styled.img`
  @media (min-width: 768px) {
    margin-right: 8px;
  }
`;

export const About = styled.div`
  padding-top: 24px;
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    padding-top: 40px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LegalLinks = styled.div`
  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Nav = styled.div`
  text-align: left;
`;

export const Text = styled.p`
  display: inline;
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
