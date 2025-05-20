import {
  AbsoluteCenter,
  Box,
  Center,
  Container,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

function Header() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 359) {
    return (
      <Box
        w="100vw"
        h="20vh"
        overflow="hidden"
        position="relative"
        textAlign="center"
      >
        <Text
          className="tranHead"
          fontFamily="Charm"
          zIndex="1"
          fontSize="4rem"
        >
          <Link href="/"> Tranquility</Link>
        </Text>

        <Image
          filter="auto"
          blur="2px"
          zIndex="0"
          width="100%"
          src="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </Box>
    );
  } else if (screenWidth < 757) {
    return (
      <Box
        w="100vw"
        h="20vh"
        overflow="hidden"
        position="relative"
        textAlign="center"
      >
        <Text
          className="tranHead"
          fontFamily="Charm"
          zIndex="1"
          fontSize="5rem"
        >
          <Link href="/"> Tranquility</Link>
        </Text>

        <Image
          filter="auto"
          blur="2px"
          zIndex="0"
          width="100%"
          src="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </Box>
    );
  } else {
    return (
      <Box
        w="100%"
        h="20vh"
        overflow="hidden"
        position="relative"
        textAlign="center"
      >
        <Text
          className="tranHead"
          fontFamily="Charm"
          zIndex="1"
          fontSize="5rem"
        >
          <Link href="/"> Tranquility Spa & Salon</Link>
        </Text>

        <Image
          filter="auto"
          blur="2px"
          zIndex="0"
          width="100vw"
          src="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </Box>
    );
  }
}

export default Header;
