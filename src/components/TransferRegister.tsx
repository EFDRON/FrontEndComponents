import { Box, Button, Card, Field, Input } from "@chakra-ui/react";

interface Props {
  type: "transfer" | "register";
}

const TransferRegister = ({ type }: Props) => {
  return (
    <Box width={"500px"}>
      <Card.Root>
        <Card.Header>
          <Card.Title>
            {type == "register"
              ? "Register With Institution"
              : "Transfer Student"}
          </Card.Title>
          <Card.Description>
            {type === "register"
              ? "Please Fill the institution Address"
              : "Fill the Student and Institiution Address"}
          </Card.Description>
        </Card.Header>
        <Card.Body>
          {type === "transfer" && (
            <Field.Root>
              <Field.Label>Student Address:</Field.Label>
              <Input placeholder="Student Address" />
            </Field.Root>
          )}
          <Field.Root>
            <Field.Label>
              {type === "register" ? "Register at:" : "Transfer to:"}
            </Field.Label>
            <Input placeholder="Institute Address" />
          </Field.Root>
        </Card.Body>
        <Card.Footer>
          <Button>{type === "register" ? "Register" : "Transfer"}</Button>
        </Card.Footer>
      </Card.Root>
    </Box>
  );
};

export default TransferRegister;
