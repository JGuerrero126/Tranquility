import { Box, Center, Container, Heading, Image, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Heading>
      <Center>
        <Text zIndex="1" position="absolute" top="0">
          Tranquility Spa & Salon
        </Text>
      </Center>
      <Box filter="auto" blur="2px" w="100vw">
        <Image
          zIndex="1"
          top="0"
          src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </Box>
    </Heading>
  );
}

export default Header;
