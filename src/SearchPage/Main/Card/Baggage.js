import React from "react";
import styled from "styled-components";

import handLuggage from "./luggage.svg";
import baggage from "./baggage.svg";
import nullIcon from "./null.svg";
import nullActive from "./nullActive.svg";

const Container = styled.div``;

const Luggage = styled.div`
  width: 19px;
  height: 20px;
  background-image: url(${handLuggage});
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  padding-top: 6px;
  align-items: center;
  font-size: 10px;
  line-height: 12px;
  color: #9ab0b9;
  margin-right: 4px;
`;

const Baggage = styled.div`
  width: 17px;
  height: 23px;
  background-image: url(${baggage});
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  padding-top: 5px;
  align-items: center;
  font-size: 10px;
  line-height: 12px;
  color: #9ab0b9;
`;

const BaggageTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 15px;
`;

const BaggageTabs = styled.div`
  display: flex;
  justify-content: center;
`;

const BaggageInfo = props => (
  <BaggageTab>
    <Luggage>
      {props.data.handLuggage === null ? (
        <img src={nullIcon} alt="" />
      ) : (
        props.data.handLuggage
      )}
    </Luggage>
    <Baggage>
      {props.data.baggage === null ? (
        <img src={nullIcon} alt="" />
      ) : (
        props.data.baggage
      )}
    </Baggage>
  </BaggageTab>
);

export default props => (
  <Container>
    {props.data.length === 1 ? (
      props.data.map((baggage, id) => <BaggageInfo data={baggage} key={id} />)
    ) : (
      <BaggageTabs>
        {props.data.map((baggage, id) => (
          <BaggageInfo data={baggage} key={id} />
        ))}
      </BaggageTabs>
    )}
  </Container>
);
