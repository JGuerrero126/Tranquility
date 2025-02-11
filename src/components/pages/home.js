import {
  Box,
  Center,
  Container,
  Divider,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import ServiceCard from "../serviceCard.js";
// import StaffCard from "../staffCard";

function Home() {
  return (
    <Container
      bg="wheat"
      position="sticky"
      marginTop="-1rem"
      minH="100%"
      paddingBottom="3rem"
      pt="1rem"
      minW="100vw"
    >
      <Heading textAlign="center">Services</Heading>
      <ServiceCard
        link="/manipedi"
        title="Manicure + Pedicure Services"
        img="https://media.istockphoto.com/id/1173495015/photo/female-hands-with-white-manicure-and-pedicure-on-pink-and-blue-background-top-view.jpg?b=1&s=612x612&w=0&k=20&c=BZiLZAHXmWTShxZa89XsNJ_nnQb53B4c1miva8-Uzro="
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <ServiceCard
        title="Hair + Color Services"
        img="https://images.pexels.com/photos/3812743/pexels-photo-3812743.jpeg?auto=compress&cs=tinysrgb&w=400"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <ServiceCard
        title="Hair Extension Services"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <ServiceCard
        title="Waxing Services"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      {/* This commented out since no longer wanted*/}
      {/* <Heading mt="1rem" textAlign="center">
          Meet The Staff
        </Heading>
        <StaffCard
          name="Rosanne"
          portrait="https://images.pexels.com/photos/14057676/pexels-photo-14057676.jpeg?auto=compress&cs=tinysrgb&w=400"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        /> */}
    </Container>
  );
}

export default Home;
