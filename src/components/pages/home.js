import {
  Box,
  Center,
  Container,
  Divider,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import ServiceCard from "../serviceCard";
// import StaffCard from "../staffCard";
import manicureImg from "../../images/manicureImg.jpg";
import extensionImg from "../../images/extension.png";
import oraLogo from "../../images/oraLogo.png";
import hairLogo from "../../images/hairLogo.jpg";
function Home() {
  const screenWidth = window.innerWidth;
  console.log(screenWidth);
  var maniPediText;
  var extensionsText;

  return (
    <div>
      <Container
        bg="wheat"
        position="sticky"
        marginTop="-1rem"
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
        <ServiceCard
          link="/mani+pedi"
          title="Mani + Pedi + Gel X"
          img={manicureImg}
        />
        <ServiceCard
          link="extensions"
          title="Hair Extensions"
          img={extensionImg}
        />
        <ServiceCard link="waxing" title="O•R•A" img={oraLogo} />
        <ServiceCard
          link="/hair+coloring"
          title="Hair + Color"
          img={hairLogo}
        />
      </Container>
    </div>
  );
}

export default Home;
