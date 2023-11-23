/** @format */

import React, { useState } from "react";
import { HeaderContainer } from "./Header.element";
import Text from "../Text/Text";
import { Link } from "react-router-dom";

export const Headers = ({ onChange }) => {
  return (
    <HeaderContainer>
      <Text textType="h2" text="category" />

      <input
        className="input"
        placeholder="Search Category"
        onChange={onChange}
      />
    </HeaderContainer>
  );
};
