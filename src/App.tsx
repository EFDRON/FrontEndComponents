import { Grid, GridItem, HStack, Image } from "@chakra-ui/react";
import ColorMode from "./components/ColorMode";
import logo from "./assets/react.svg";
import Signup from "./components/Sigup";
import { useState } from "react";
import Choose from "./components/Choose";

function App() {
  const [isMain, setIsMain] = useState(true);
  return (
    <>
      <Grid templateAreas={{ base: `"nav" "main"` }}>
        <GridItem area="nav" justifyContent={"space-between"}>
          <HStack justifyContent="space-between" padding={2}>
            <Image src={logo} />
            <ColorMode />
          </HStack>
        </GridItem>

        <GridItem area="main">
          <Choose></Choose>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
