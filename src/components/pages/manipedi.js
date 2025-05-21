import {
  Box,
  Center,
  Container,
  Divider,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Pricing from "../pricing";

function manipedi() {
  return (
    <div>
      <Pricing
        title="Manicure + Pedicure Pricing"
        list={[
          "Manicure (with included 5 minute massage) - $20",
          "Deluxe Manicure (with included 10 minute massage & scrub) - $30",
          "Gel Manicure - $30",
          "Dip Manicure - $30",
          "Gel X - $55",
          "Removal with service - $5-$10",
          "XXXXXXXXXXXXXXXXXXXXXXXX",
          "Pedicure (with included 5 minute massage) - $25",
          "Deluxe Pedicure (with included 10 minute massage & scrub) - $35",
          "Gel Pedicure - $35",
          "Dip Pedicure - $35",
        ]}
      />
    </div>
  );
}

export default manipedi;
