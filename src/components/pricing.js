import {
  Box,
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  List,
  ListItem,
  Separator,
  Text,
} from "@chakra-ui/react";

function Pricing({ title, img, list }) {
  return (
    <Card
      direction={["column", "column", "row"]}
      boxShadow="0.5rem 0.5rem 0rem brown"
      bg="snow"
      marginTop="1rem"
      borderRadius="0"
    >
      <CardBody>
        <Heading textColor="coral" textAlign="center">
          {title}
        </Heading>
        <List align="center">
          {list.map((item, index) => (
            <div>
              <ListItem key={index}>{item}</ListItem>
              <Separator />
            </div>
          ))}
          ;
        </List>
      </CardBody>
    </Card>
  );
}

export default Pricing;
