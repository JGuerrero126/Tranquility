import {
  Box,
  Card,
  CardBody,
  Center,
  Divider,
  Heading,
  Image,
  List,
  ListItem,
  // Separator,
  Text,
} from "@chakra-ui/react";

function Pricing({ title, img, description, list }) {
  return (
    <Card
      direction={["column", "column", "row"]}
      boxShadow="0rem 0.5rem 0rem brown"
      bg="snow"
      paddingTop="1rem"
      borderRadius="0"
      minH="75vh"
    >
      <CardBody>
        <Heading textColor="coral" textAlign="center">
          {title}
        </Heading>
        <Divider />
        {description && <Text textAlign="center">{description}</Text>}
        <List align="center">
          {list.map((item, index) => (
            <div key={index}>
              <ListItem key={index}>{item}</ListItem>
            </div>
          ))}
          ;
        </List>
      </CardBody>
    </Card>
  );
}

export default Pricing;
