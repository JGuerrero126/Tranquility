import {
  Box,
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

function ServiceCard({ title, img, text, link }) {
  return (
    <Link href={link}>
      <Card
        direction={["column", "column", "row"]}
        boxShadow="0.5rem 0.5rem 0rem brown"
        bg="snow"
        marginTop="1rem"
        borderRadius="0"
      >
        <Center mt={["1rem", "0rem"]}>
          <Box w="15rem" h="15rem">
            <Image border="0.5rem solid darkred" src={img} />
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
    </Link>
  );
}

export default ServiceCard;
