import {
  Box,
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  Text,
  Link,
  CardHeader,
  VStack,
} from "@chakra-ui/react";

function ServiceCard({ title, img, text, link }) {
  const screenWidth = window.innerWidth;
  var width;
  if (screenWidth < 768) {
    width = "80vw";
  } else {
    width = "30rem";
  }
  return (
    <Link href={link}>
      <Card
        boxShadow="0.5rem 0.5rem 0rem #e8c888"
        bg="snow"
        margin=".5rem"
        borderRadius="0"
        minW={width}
      >
        <VStack>
          <CardHeader>
            <Heading textColor="#e8c888" textAlign="center">
              {title}
            </Heading>
          </CardHeader>
          <CardBody>
            <Box w="15rem" h="15rem">
              <Image
                border="0.5rem solid wheat"
                src={img}
                bg="rgb(255, 255, 255)"
              />
            </Box>
          </CardBody>
        </VStack>
      </Card>
    </Link>
  );
}

export default ServiceCard;
