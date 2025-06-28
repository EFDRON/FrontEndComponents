import { Grid, GridItem, HStack, Image } from "@chakra-ui/react";
import ColorMode from "./components/ColorMode";
import logo from "./assets/react.svg";

import Choose from "./components/Choose";
import StudentInfomation from "./components/StudentInfomation";

function App() {
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
          <StudentInfomation />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
