import {
  AbsoluteCenter,
  Box,
  Center,
  Container,
  Heading,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import tranquilityLogo from "../images/tranquilityLogo.png";
import tranquilityLogoBG from "../images/tranquilityLogoBackground.png";

function Header() {
  const screenWidth = window.innerWidth;
  var width;
  var height;
  var marginTop;
  if (screenWidth < 375) {
    width = "100%";
    height = "25vh";
    marginTop = "-3rem";
  } else if (screenWidth < 425) {
    width = "100%";
    height = "25vh";
    marginTop = "-3rem";
  } else if (screenWidth < 768) {
    width = "100vw";
    height = "60vw";
    marginTop = "-4rem";
  } else if (screenWidth < 1024) {
    width = "80vw";
    height = "40vh";
    marginTop = "-6.5rem";
  } else if (screenWidth < 1440) {
    width = "60vw";
    height = "40vh";
    marginTop = "-6.5rem";
  } else if (screenWidth < 2560) {
    width = "40vw";
    height = "40vh";
    marginTop = "-6.5rem";
  } else {
    width = "40vw";
    height = "40vh";
    marginTop = "-12rem";
  }
  return (
    <LinkBox
      w="100%"
      h="20vh"
      overflow="hidden"
      position="relative"
      align="center"
    >
      <LinkOverlay href="/">
        <Image
          zIndex="0"
          width={width}
          height={height}
          marginTop={marginTop}
          src={tranquilityLogoBG}
        />
      </LinkOverlay>
    </LinkBox>
  );
}

export default Header;

//  width = "40vw";
//   height = "40vh";
//   marginTop = "-11rem";

//   return (
//     <Box
//       w="100vw"
//       h="20vh"
//       overflow="hidden"
//       position="relative"
//       textAlign="center"
//     >
//       <Text
//         className="tranHead"
//         fontFamily="Charm"
//         zIndex="1"
//         fontSize="4rem"
//       >
//         <Link href="/"> Tranquility</Link>
//       </Text>

//       <Image
//         filter="auto"
//         blur="2px"
//         zIndex="0"
//         width="100%"
//         src="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       />
//     </Box>
