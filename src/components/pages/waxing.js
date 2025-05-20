import Pricing from "../pricing";
import {
  Card,
  CardBody,
  Center,
  Divider,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import bobImg from "../../images/bobImg.jpg";

function waxing() {
  return (
    <div>
      <Card
        direction={["column", "column", "row"]}
        boxShadow="0.5rem 0.5rem 0rem brown"
        bg="snow"
        paddingTop="1rem"
        borderRadius="0"
        minH="75vh"
      >
        <CardBody>
          <Heading textColor="coral" textAlign="center">
            O•R•A
          </Heading>
          <Divider />
          <Center textAlign="center" marginLeft="10vw" marginRight="10vw">
            O•R•A is a revolutionary technique using LED technology along with
            high quality hair extensions. O•R•A can be used in areas such as the
            hairline and crown, natural looking with no visible seam. Safe for
            thinning or fine hair. O•R•A can give you new hair without surgery,
            without any downtime.
          </Center>
          <Center marginTop="2rem">
            <Image maxW="50vw" src={bobImg} />
          </Center>
        </CardBody>
      </Card>
    </div>
  );
}

export default waxing;
