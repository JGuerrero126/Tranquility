import {
  Card,
  CardBody,
  Divider,
  Heading,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

function extensions() {
  return (
    <div>
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
            Extension Pricing
          </Heading>
          <Divider />
          <Heading fontSize="2rem" textAlign="center">
            Tape-in Extensions
          </Heading>
          <Text textAlign="center">All Prices Included Installation</Text>
          <Text textAlign="center">Contact Us For Your Consultation</Text>
          <Text textAlign="center">
            (Average Full Head Needs 30 to 50 Pieces)
          </Text>
          <List align="center">
            <ListItem>14" - 10 Pieces - $150</ListItem>
            <ListItem>18" - 10 Pieces - $175</ListItem>
            <ListItem>22" - 10 Pieces - $220</ListItem>
          </List>
          <Heading fontSize="2rem" textAlign="center">
            Fusion Extensions
          </Heading>
          <Text textAlign="center">All Prices Included Installation</Text>
          <Text textAlign="center">
            (Average Full Head Needs 125 to 150 Pieces)
          </Text>
          <List align="center">
            <ListItem>18" - 25 Pieces - $120</ListItem>
            <ListItem>22" - 25 Pieces - $140</ListItem>
          </List>
          <Heading fontSize="2rem" textAlign="center">
            I-tip Extensions
          </Heading>
          <Text textAlign="center">All Prices Included Installation</Text>
          <Text textAlign="center">
            (Average Full Head Needs 125 to 150 Pieces)
          </Text>
          <List align="center">
            <ListItem>20" - 25 Pieces - $120</ListItem>
            <ListItem>22" - 25 Pieces - $140</ListItem>
          </List>
          <Heading fontSize="2rem" textAlign="center">
            Weft Extensions
          </Heading>
          <Text textAlign="center">All Prices Included Installation</Text>
          <Text textAlign="center">
            (Average Full Head Needs 50 to 100 Grams)
          </Text>
          <List align="center">
            <ListItem>18" - 50g - $500</ListItem>
            <ListItem>22" - 50g - $600</ListItem>
          </List>
          <Heading fontSize="2rem" textAlign="center">
            Tape-In Wefts
          </Heading>
          <Text textAlign="center">All Prices Included Installation</Text>
          <Text textAlign="center">
            (Average Full Head Needs 50 to 100 Grams)
          </Text>
          <List align="center">
            <ListItem>18" - 50g - $400</ListItem>
            <ListItem>22" - 50g - $450</ListItem>
          </List>
          <Heading fontSize="2rem" textAlign="center">
            Clip-in Extensions
          </Heading>
          <Text textAlign="center">All Prices Included Installation</Text>
          <Text textAlign="center">
            (Standard Price is Sufficient for Average Full Head)
          </Text>
          <List align="center">
            <ListItem>16" - $219</ListItem>
            <ListItem>18" - $229</ListItem>
            <ListItem>20" - $249</ListItem>
          </List>
          <Heading fontSize="2rem" textAlign="center">
            Misc. Services
          </Heading>
          <List align="center">
            <ListItem>Removal/Re-installation - $250-$400</ListItem>
            <ListItem>Adjustment Only - $175-$200</ListItem>
          </List>
        </CardBody>
      </Card>
    </div>
  );
}

export default extensions;
