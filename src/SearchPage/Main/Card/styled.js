import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;

  display: flex;
  margin-bottom: 8px;
  border-radius: 4px;

  @media (min-width: 1200px) {
    padding-top: 12px;
    padding-bottom: 14px;
    padding-right: 6px;
    padding-left: 6px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.p`
  display: inline;
  color: #4a4a4a;
`;

export const Price = styled.p`
  color: #ff9241;
  display: inline;
  font-size: 22px;
  line-height: 26px;
`;

export const Airlines = styled.img`
  width: 99px;
  height: 36px;
`;

export const Icon = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 8px;
`;

export const Destination = styled.div`
  margin-bottom: 10px;
`;

export const CheepestTicket = styled.div`
  background-color: #83d40b;
  font-size: 14px;
  line-height: 18px;
  color: #fff;
  font-weight: 900;
  padding: 7px 6px;
`;

export const FastestTicket = CheepestTicket.extend`
  background-color: #af7542;
`;

export const BestTicket = CheepestTicket.extend`
  background-color: #c279d1;
`;

export const BigLogo = styled.img`
  width: 99px;
  height: 36px;
  object-fit: cover;
`;

export const SmallLogo = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  padding: 4px;
  border: 1px solid #dddddd;
  border-radius: 4px;

  &:first-child {
    margin-right: 8px;
  }
`;

export const Luggage = styled.img`
  width: 40px;
  height: 23px;
  object-fit: cover;
`;

export const Buy = styled.button`
  background-color: #ff6d00;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  line-height: 18px;
  padding: 6px 42px;
`;

export const Info = styled.div`
  border-right: 1px solid #dddddd;
  padding-top: 10px;
  padding-right: 23px;
  padding-left: 23px;
`;
