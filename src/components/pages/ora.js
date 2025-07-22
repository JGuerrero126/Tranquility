import {
  AspectRatio,
  Card,
  CardBody,
  Center,
  Divider,
  Heading,
  Image,
  VStack,
  Stack,
} from "@chakra-ui/react";
import bobImg from "../../images/bobImg.jpg";
import rosanneImg from "../../images/rosanneImg.jpg";

function ora() {
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
        direction={["column", "column", "row"]}
        boxShadow="0rem 0.5rem 0rem brown"
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
            thinning or fine hair.
          </Center>
          <Center marginTop="2rem">
            <Stack>
              <Image maxW={width} src={bobImg} />{" "}
              <AspectRatio maxWidth={width}>
                <iframe
                  src="https://player.vimeo.com/video/1103322475?h=2d4bacd7e9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1"
                  // frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  // referrerpolicy="strict-origin-when-cross-origin"
                  // style="position:absolute;top:0;left:0;width:100%;height:100%;"
                  title="3rd thursday.mp4"
                ></iframe>
              </AspectRatio>
            </Stack>
          </Center>
        </CardBody>
      </Card>
    </div>
  );
}

export default ora;
