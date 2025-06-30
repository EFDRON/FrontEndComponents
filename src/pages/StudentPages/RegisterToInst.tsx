import { Grid, GridItem, HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/react.svg";
import NavBar from "../../components/NavBar";
import ColorMode from "../../components/ColorMode";
import TransferRegister from "../../components/TransferRegister";

const RegisterToInst = () => {
  return (
    <Grid templateAreas={{ base: `"nav" "main"` }}>
      <GridItem area="nav" justifyContent={"space-between"}>
        <HStack justifyContent="space-between" padding={2}>
          <Image src={logo} />
          <NavBar
            pages={[
              "Home",
              "Register to Institution",
              "Add Skill",
              "Add Certificate",
              "Add Work Experience",
            ]}
          ></NavBar>
          <ColorMode />
        </HStack>
      </GridItem>
      <GridItem area="main" padding={2}>
        <center>
          <TransferRegister type="register"></TransferRegister>
        </center>
      </GridItem>
    </Grid>
  );
};

export default RegisterToInst;
