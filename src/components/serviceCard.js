import {
  Box,
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

function ServiceCard({ title, img, text }) {
  return (
    // <Box boxShadow="0.5rem 0.5rem 0rem brown" bg="snow" marginTop="1rem">
    //   <Heading textColor="skyblue" textAlign="center">
    //     {title}
    //   </Heading>
    //   <Center>
    //     <Box w="15rem" h="15rem">
    //       <Image border="0.5rem solid wheat" src={img} />
    //     </Box>
    //   </Center>
    //   <Text textAlign="center">{text}</Text>
    // </Box>
    <Card
      direction={["column", "column", "row"]}
      boxShadow="0.5rem 0.5rem 0rem brown"
      bg="snow"
      marginTop="1rem"
      borderRadius="0"
    >
      <Center mt={["1rem", "0rem"]}>
        <Box w="15rem" h="15rem">
          <Image border="0.5rem solid wheat" src={img} />
        </Box>
      </Center>
      <CardBody>
        <Heading textColor="coral" textAlign="center">
          {title}
        </Heading>
        <Text mt="2rem" textAlign="center">
          {text}
        </Text>
      </CardBody>
    </Card>
  );
}

export default ServiceCard;
