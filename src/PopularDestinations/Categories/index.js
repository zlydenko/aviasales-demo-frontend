import React from "react";
import { Categories, Category, Icon, Text } from "./styled";

import globe from "./icons/globe.svg";
import palm from "./icons/palm.svg";
import shoppingCart from "./icons/shoppingCart.svg";
import culture from "./icons/culture.svg";
import nightlife from "./icons/nightlife.svg";
import babyCart from "./icons/babyCart.svg";

export default () => {
  return (
    <Categories>
      <Category>
        <Icon>
          <img src={globe} alt="" />
        </Icon>
        <Text>куда угодно</Text>
      </Category>
      <Category>
        <Icon>
          <img src={palm} alt="" />
        </Icon>
        <Text>солнце и море</Text>
      </Category>
      <Category>
        <Icon>
          <img src={shoppingCart} alt="" />
        </Icon>
        <Text>шопинг, город</Text>
      </Category>
      <Category>
        <Icon>
          <img src={culture} alt="" />
        </Icon>
        <Text>культура и история</Text>
      </Category>
      <Category>
        <Icon>
          <img src={nightlife} alt="" />
        </Icon>
        <Text>ночная жизнь</Text>
      </Category>
      <Category>
        <Icon>
          <img src={babyCart} alt="" />
        </Icon>
        <Text>отдых с детьми</Text>
      </Category>
    </Categories>
  );
};
