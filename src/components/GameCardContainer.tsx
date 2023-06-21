import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return <Box width="300px" borderRadius={10} overflow="hidden"></Box>;
};

export default GameCardContainer;
