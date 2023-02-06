import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";

function StaffCard({ name, portrait, description }) {
  return (
    <Box boxShadow="0.5rem 0.5rem 0rem brown" bg="snow" marginTop="1rem">
      <Heading textColor="coral">{name}</Heading>
      <Center>
        <Box w="15rem" h="15rem">
          <Image border="0.5rem solid wheat" src={portrait} />
        </Box>
      </Center>
      <Text>{description}</Text>
    </Box>
  );
}

export default StaffCard;
