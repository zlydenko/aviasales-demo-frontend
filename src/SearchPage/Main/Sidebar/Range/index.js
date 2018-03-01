import React from "react";
import styled from "styled-components";

import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";

import { Range } from "rc-slider";
import "rc-slider/assets/index.css";

const Container = styled.div`
  margin-top: 14px;
  margin-bottom: 12px;
`;

const Title = styled.h5`
  font-size: 12px;
  line-height: 18px;
  color: #323333;
  font-weight: 500;
  margin: 0px;
`;

const Markers = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const From = styled.span`
  font-size: 12px;
  line-height: 18px;
  color: #323333;
`;

const To = From.extend``;

const handleStyle = {
  background: "#fff",
  border: "1px solid #D6D9DA",
  borderRadius: 50
};

const railStyle = {
  position: "relative",
  top: 5,
  height: 2,
  background: "#dddddd"
};

const trackStyle = {
  position: "relative",
  top: 3,
  height: 2,
  background: "#00ACDE"
};

const convertDuration = n => {
  const h = Math.floor(n / 3600);
  const m = Math.floor((n % 3600) / 60);
  return `${h}ч ${m}м`;
};

export default props => (
  <Container>
    {props.title && <Title>{props.title}:</Title>}
    <Markers>
      {props.from && (
        <From>
          с{" "}
          {format(props.from, "HH:mm, D MMM", {
            locale: ruLocale
          })}
        </From>
      )}
      {props.to && (
        <To>
          до{" "}
          {format(props.to, "HH:mm, D MMM", {
            locale: ruLocale
          })}
        </To>
      )}
      {props.durationFrom && (
        <From>от {convertDuration(props.durationFrom)}</From>
      )}
      {props.durationTo && <To>до {convertDuration(props.durationTo)}</To>}
    </Markers>
    <Range
      defaultValue={[0, 100]}
      allowCross={false}
      handleStyle={[handleStyle, handleStyle]}
      trackStyle={[trackStyle]}
      railStyle={railStyle}
    />
  </Container>
);
