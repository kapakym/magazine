import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { AppProviderType } from "../types/types";

const BrandBar = observer(() => {
    const {device } = useContext<AppProviderType>(Context)
  return <div>BrandBar</div>;
});

export default BrandBar;
