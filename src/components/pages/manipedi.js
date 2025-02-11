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
          "",
        ]}
      />
    </div>
  );
}

export default manipedi;
