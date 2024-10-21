import {
  Avatar,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
//we will store the items in vertical stack order

const UserHeader = () => {
    const copyURL =() =>{
        
    }
  return (
    <VStack gap={4} alignItems={"start"}>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Mark Zukerberg
          </Text>
          <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"sm"}>markzukerberg</Text>
            <Text
              fontSize={"xs"}
              bg={"gray.dark"}
              color={"gray.light"}
              p={1}
              borderRadius={"full"}
            >
              Connectify.net
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar name="Mark Zukerberg" src="/zuck-avatar.png" size={"xl"} />
        </Box>
      </Flex>
      <Text>Co-Founder, executive Chairman and CEO Of Meta Platform</Text>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Flex gap={2} alignItems={"center"}>
          <Text color={"gray.light"}>3.2k followers</Text>
          <Box w="1" h="1" bg={"gray.light"} borderRadius={"full"}></Box>
          <Link color={"gray.light"}>instagram.com</Link>
        </Flex>
        <Flex alignItems="center">y
          <Box className="icon-container">
            <BsInstagram size={24} cursor={"pointer"} />
          </Box>
          <Menu>
            <MenuButton>
              <Box className="icon-container">
                <CgMoreO size={24} cursor={"pointer"} />
              </Box>
            </MenuButton>
            <Portal>
              <MenuList bg={"gray.dark"}>
                <MenuItem bg={"gray.dark"} onClick={copyURL}>Copy Link</MenuItem>
              </MenuList>
            </Portal>
          </Menu>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default UserHeader;
