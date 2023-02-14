import {
  Box,
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

function StaffCard({ name, portrait, description }) {
  return (
    <Card
      direction={["column", "column", "row"]}
      boxShadow="0.5rem 0.5rem 0rem brown"
      bg="snow"
      marginTop="1rem"
      borderRadius="0"
    >
      <Center mt={["1rem", "0rem"]}>
        <Box w="15rem" h="15rem">
          <Image border="0.5rem solid darkred" src={portrait} />
        </Box>
      </Center>
      <CardBody>
        <Heading textColor="coral" textAlign="center">
          {name}
        </Heading>
        <Text mt="2rem" textAlign="center">
          {description}
        </Text>
      </CardBody>
    </Card>
  );
}

export default StaffCard;
