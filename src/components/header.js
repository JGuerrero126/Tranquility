import {
  AbsoluteCenter,
  Box,
  Center,
  Container,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

function Header() {
  return (
    // <Heading>
    //   <Center>
    //     <Text
    //       className="tranHead"
    //       fontFamily="fantasy"
    //       zIndex="1"
    //       position="absolute"
    //       top="12"
    //       fontSize={["2.25rem", "5rem"]}
    //     >
    //       Tranquility Spa & Salon
    //     </Text>
    //   </Center>
    <Box
      top="0"
      w="100vw"
      h={["10rem"]}
      overflow="hidden"
      position="relative"
      textAlign="center"
    >
      <Text
        className="tranHead"
        fontFamily="fantasy"
        zIndex="1"
        fontSize={["5rem", "5rem"]}
      >
        Tranquility Spa & Salon
      </Text>

      <Image
        filter="auto"
        blur="2px"
        zIndex="0"
        width="100%"
        src="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
    </Box>
    // </Heading>
  );
}

export default Header;
