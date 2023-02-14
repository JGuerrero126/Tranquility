import { Box, Center, Container, Heading, Image, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg="snow" minW="100vw" bottom="0" pt="1rem" pb="1rem">
      <Heading textColor="coral" mb="2rem">
        Tranquility Spa & Salon
      </Heading>
      <Text fontSize="1.5rem" textAlign="left" ml="1rem" mb="1rem">
        Contact
      </Text>
      <Text fontSize="1.5rem" textAlign="left" ml="1rem" mb="1rem">
        About Us
      </Text>
      <Text fontSize="1.5rem" textAlign="left" ml="1rem">
        Twitter
      </Text>
    </Box>
  );
}

export default Footer;
