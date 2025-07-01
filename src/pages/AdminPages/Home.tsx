import React from "react";
import { Grid, GridItem, HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/react.svg";
import ColorMode from "../../components/ColorMode";
import NavBar from "../../components/NavBar";
import StudentInfomation from "../../components/StudentInfomation";
import Pending from "../../components/Pending";

const Home = () => {
  return (
    <Grid templateAreas={{ base: `"nav" "main"` }}>
      <GridItem area="nav" justifyContent={"space-between"}>
        <HStack justifyContent="space-between" padding={2}>
          <Image src={logo} />

          <ColorMode />
        </HStack>
      </GridItem>
      <GridItem area="main" padding={2}>
        <center>
          <Pending></Pending>
        </center>
      </GridItem>
    </Grid>
  );
};

export default Home;
