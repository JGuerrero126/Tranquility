import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";

function ServiceCard({ title, img, text }) {
  return (
    <Box boxShadow="0.5rem 0.5rem 0rem brown" bg="snow" marginTop="1rem">
      <Heading textColor="skyblue">{title}</Heading>
      <Center>
        <Box w="15rem" h="15rem">
          <Image border="0.5rem solid wheat" src={img} />
        </Box>
      </Center>
      <Text>{text}</Text>
    </Box>
  );
}

export default ServiceCard;
