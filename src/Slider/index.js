import React from "react";
import styled from "styled-components";
import aeroflot from "./aeroflot.png";
import aeroflot2x from "./aeroflot2x.png";
import elval from "./elval.png";
import elval2x from "./elval2x.png";
import koreanair from "./koreanair.png";
import koreanair2x from "./koreanair2x.png";
import onetwotrip from "./onetwotrip.png";
import onetwotrip2x from "./onetwotrip2x.png";
import s7 from "./s7.png";
import s72x from "./s72x.png";

const Slider = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  line-height: 40px;
  text-align: center;
`;

const Image = styled.img`
  width: 149px;
  object-fit: cover;
  margin-right: 32px;

  @media (min-width: 1200px) {
    margin-right: 20px;
  }
`;

const SliderDot = styled.div`
  width: 10px;
  height: 10px;
  background-color: #fff;
  border: 1px solid #818181;
  margin-right: 8px;
  border-radius: 50%;

  &:hover,
  &:focus {
    background-color: #818181;
  }

  &:last-child {
    margin-right: 0px;
  }
`;

const Airlines = styled.div``;
const SliderControls = styled.div`
  margin-top: 24px;
  margin-bottom: 32px;
  display: flex;
  justify-content: center;

  @media (min-width: 1200px) {
    margin-top: 30px;
    margin-bottom: 28px;
  }
`;

export default () => {
  return (
    <div className="row center-md">
      <div className="col-md-10 col-lg-10">
        <Slider>
          <Title>
            Дешевые авиабилеты от крупнейших авиакомпаний и агентств
          </Title>
          <div className="row center-md">
            <div className="col-md-10">
              <Airlines>
                <Image src={aeroflot} srcSet={`${aeroflot2x} 2x`} alt="" />
                <Image src={s7} srcSet={`${s72x} 2x`} alt="" />
                <Image src={onetwotrip} srcSet={`${onetwotrip2x} 2x`} alt="" />
                <Image src={koreanair} srcSet={`${koreanair2x} 2x`} alt="" />
                <Image src={elval} srcSet={`${elval2x} 2x`} alt="" />
              </Airlines>
            </div>
          </div>
          <SliderControls>
            <SliderDot />
            <SliderDot />
            <SliderDot />
          </SliderControls>
        </Slider>
      </div>
    </div>
  );
};
