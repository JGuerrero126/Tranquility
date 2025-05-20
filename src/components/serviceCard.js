import {
  Box,
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";

function ServiceCard({ title, img, text, link }) {
  return (
    <Link href={link}>
      <Card
        direction={["column", "column", "row"]}
        boxShadow="0.5rem 0.5rem 0rem #e8c888"
        bg="snow"
        marginTop="1rem"
        borderRadius="0"
      >
        <Center mt="1rem">
          <Box w="15rem" h="15rem">
            <Image
              border="0.5rem solid wheat"
              src={img}
              bg="rgb(255, 255, 255)"
            />
          </Box>
        </Center>
        <CardBody>
          <Heading textColor="#e8c888" textAlign="center">
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
