import React from "react";
import config from "./config";

const ConfigContext = React.createContext(config);

export default ConfigContext;

export const { Provider, Consumer } = ConfigContext;
