import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import ServiceCard from "../serviceCard";
// import StaffCard from "../staffCard";
import manicureImg from "../../images/manicureImg.jpg";
import extensionImg from "../../images/extension.png";
import oraLogo from "../../images/oraLogo.png";
import hairLogo from "../../images/hairLogo.jpg";
function Home() {
  const screenWidth = window.innerWidth;
  // console.log(screenWidth);

  return (
    <div>
      <Container
        bg="wheat"
        position="sticky"
        // marginTop="-1rem"
        minH="75vh"
        paddingBottom="3rem"
        pt="1rem"
        minW="100%"
      >
        <Heading
          textAlign="center"
          fontFamily="Charm"
          textColor="rgb(49, 49, 49)"
        >
          Available Services
        </Heading>
        <Flex
          wrap="wrap"
          align="center"
          justify="center"
          direction={["column", "row"]}
        >
          <ServiceCard
            link="/mani+pedi"
            title="Mani + Pedi + Gel X"
            img={manicureImg}
          />
          {/* <Spacer /> */}
          <ServiceCard
            link="extensions"
            title="Hair Extensions"
            img={extensionImg}
          />
          {/* <Spacer /> */}
          <ServiceCard link="ora" title="O•R•A" img={oraLogo} />
          {/* <Spacer /> */}
          <ServiceCard
            link="/hair+coloring"
            title="Hair + Color"
            img={hairLogo}
          />
        </Flex>
      </Container>
    </div>
  );
}

export default Home;
