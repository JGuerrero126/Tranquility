import { Box, Center, Container, Heading, Image, Text } from "@chakra-ui/react";
// import { Link as ReactRouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

function Header() {
  return (
    <Heading>
      <Container
        filter="auto"
        w="100vw"
        minH={["20vh", "10vh"]}
        bg="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      >
        <Center>
          <Text
            className="tranHead"
            fontFamily="fantasy"
            zIndex="1"
            position="absolute"
            top="1vh"
            fontSize={["2.75rem", "5rem"]}
          >
            <Link href="/">Tranquility Spa & Salon</Link>
          </Text>
        </Center>
        {/* <Image
          blur="2px"
          w="100vw"
          src="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        /> */}
      </Container>
    </Heading>
  );
}

export default Header;
