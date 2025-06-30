import { Grid, GridItem, HStack, Image, VStack } from "@chakra-ui/react";
import ColorMode from "../components/ColorMode";
import NavBar from "../components/NavBar";
import logo from "../assets/react.svg";

import UploadCertificate from "../components/UploadCertificate";
import ShowData from "../components/ShowData";
const AddCert = () => {
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
          <VStack>
            <UploadCertificate type="normal"></UploadCertificate>
            <ShowData type="Certificate"></ShowData>
          </VStack>
        </center>
      </GridItem>
    </Grid>
  );
};

export default AddCert;
