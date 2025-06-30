import React from "react";
import { Flex, Box, Button, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
interface Props {
  pages: string[];
}

const NavBar = ({ pages }: Props) => {
  return (
    <Flex as="nav" p={4} align="center">
      <Flex gap={4}>
        {pages.map((page) => {
          return (
            <RouterLink to={"/" + page.toLowerCase().replace(" ", "-")}>
              <Button variant="ghost">{page}</Button>
            </RouterLink>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default NavBar;
