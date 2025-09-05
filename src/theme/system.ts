import { createSystem, defaultConfig, mergeConfigs } from "@chakra-ui/react";
import { customConfig } from "./customConfig";

const system = createSystem(mergeConfigs(defaultConfig, customConfig));

export default system;
