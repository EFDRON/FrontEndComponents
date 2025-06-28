import { Avatar, Button, Card, Center, Heading } from "@chakra-ui/react";

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
          <Button variant="outline">SignUp</Button>
          <Button>Login</Button>
        </Card.Footer>
      </Card.Root>
    </Center>
  );
};
export default Choose;
