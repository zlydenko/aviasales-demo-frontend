import styled from "styled-components";

export const Categories = styled.div`
  padding-top: 32px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Category = styled.div`
  flex-basis: 33.3333%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-size: 12px;
  line-height: 20px;
  color: #5c5c5c;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 24px;
  cursor: "pointer";

  @media (min-width: 768px) {
    flex-basis: 16.6667%;
  }

  &:hover,
  &:focus {
    border-bottom: 1px solid #00ace2;
  }
`;

export const Icon = styled.div`
  width: 48px;
  height: 48px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  box-shadow: 0px 2px 4px rgba(74, 74, 74, 0.1);

  ${Category}:hover &,
  ${Category}:focus & {
    box-shadow: 0px 4px 16px rgba(74, 74, 74, 0.12);
  }
`;

export const Text = styled.p`
  margin-top: 12px;
  color: #00ace2;

  ${Category}:hover &,
  ${Category}:focus & {
    color: #5c5c5c;
  }
`;
