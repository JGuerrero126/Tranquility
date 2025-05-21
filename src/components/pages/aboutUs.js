import {
  Card,
  CardBody,
  Center,
  Divider,
  Heading,
  Image,
} from "@chakra-ui/react";

function aboutUs() {
  const screenWidth = window.innerWidth;
  var width;
  if (screenWidth < 1024) {
    width = "80vw";
  } else {
    width = "50rem";
  }
  return (
    <div>
      <Card
        boxShadow="0rem 0.5rem 0rem brown"
        bg="snow"
        paddingTop="1rem"
        borderRadius="0"
        minH="75vh"
      >
        <CardBody>
          <Heading textColor="coral" textAlign="center">
            About Us
          </Heading>
          <Divider />
          <Center textAlign="center" marginLeft="10vw" marginRight="10vw">
            Tranquility Spa & Salon has been local to Irvine, California since
            it was first established in 2008. Starting as a place for haircuts
            and styling, we found our specialization of the utilization of
            ammonia-free hair color to provide vibrant and long lasting color.
            Our list of services includes custom hair extensions as well as
            press-on nails. We continue to grow and evolve, even launching O•R•A
            a new hair extension application technique. It allows the
            application of hair extensions where they weren’t previously
            possible including on the crown and hairline as well being safe for
            thinning or fine hair.
          </Center>
        </CardBody>
      </Card>
    </div>
  );
}

export default aboutUs;
