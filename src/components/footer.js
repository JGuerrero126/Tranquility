import { Box, Center, Container, Heading, Image, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg="snow" minW="100vw" bottom="0">
      <Heading textColor="coral">Tranquility Spa & Salon</Heading>
      <Text textAlign="left" ml="1rem">
        Contact
      </Text>
      <Text textAlign="left" ml="1rem">
        About Us
      </Text>
      <Text textAlign="left" ml="1rem">
        Twitter
      </Text>
    </Box>
  );
}

export default Footer;
