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
        boxShadow="0.5rem 0.5rem 0rem brown"
        bg="snow"
        marginTop="1rem"
        borderRadius="0"
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
          <List align="center">
            <ListItem>14" - 10 Pack - $150</ListItem>
            <ListItem>18" - 10 Pack - $175</ListItem>
            <ListItem>22" - 10 Pack - $220</ListItem>
          </List>
          <Heading fontSize="2rem" textAlign="center">
            Fusion Extensions
          </Heading>
          <Text textAlign="center">All Prices Included Installation</Text>
          <List align="center">
            <ListItem>18" - 20 Pack - $120</ListItem>
            <ListItem>22" - 20 Pack - $135</ListItem>
          </List>
          <Heading fontSize="2rem" textAlign="center">
            I-tip Extensions
          </Heading>
          <Text textAlign="center">All Prices Included Installation</Text>
          <List align="center">
            <ListItem>18" - 20 Pack - $120</ListItem>
            <ListItem>22" - 20 Pack - $135</ListItem>
          </List>
          <Heading fontSize="2rem" textAlign="center">
            Weft Extensions
          </Heading>
          <Text textAlign="center">All Prices Included Installation</Text>
          <List align="center">
            <ListItem>18.5" - $500</ListItem>
            <ListItem>22.5"0 - $600</ListItem>
          </List>
          <Heading fontSize="2rem" textAlign="center">
            Clip-in Extensions
          </Heading>
          <Text textAlign="center">All Prices Included Installation</Text>
          <List align="center">
            <ListItem>16" - $209</ListItem>
            <ListItem>18" - $219</ListItem>
            <ListItem>20" - $239</ListItem>
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
