import {
  Box,
  Center,
  Container,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

function Footer() {
  const screenWidth = window.innerWidth;
  var font;
  if (screenWidth < 375) {
    font = "1.25rem";
  } else {
    font = "1.5rem";
  }
  return (
    <Box
      // bg="black"
      minW="100%"
      bottom="0"
      pt="1rem"
      pb="1rem"
      pl="1rem"
      h="15vh"
    >
      <Heading textColor="coral" mb="2rem">
        Tranquility Spa & Salon
      </Heading>
      <Link href="/about-us" fontSize={font} textAlign="left" ml="1rem">
        About Us
      </Link>
      <Text fontSize={font} textAlign="left" ml="1rem" mt="1REM" mb="1rem">
        Contact Us At (949) 775-2520
      </Text>
      <Text fontSize={font} textAlign="left" ml="1rem" mb="1rem">
        Find Us On Instagram @tranquilitysalonirvine
      </Text>
    </Box>
  );
}

export default Footer;
