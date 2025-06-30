import { Button, Card, Center, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Choose = () => {
  return (
    <Center>
      <Card.Root width="500px">
        <Card.Body gap="2">
          <Card.Title mt="2" justifyContent={"center"}>
            <Heading as={"h1"}>Student Data Mangment System</Heading>
          </Card.Title>
          <Card.Description></Card.Description>
        </Card.Body>
        <Card.Footer justifyContent={"center"} spaceX={2}>
          <RouterLink to="/register">
            <Button variant="outline">SignUp</Button>
          </RouterLink>
          <RouterLink to="/student-home">
            <Button>Login</Button>
          </RouterLink>
        </Card.Footer>
      </Card.Root>
    </Center>
  );
};
export default Choose;
