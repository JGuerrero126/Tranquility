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
import StaffCard from "../staffCard";

function Home() {
  return (
    <div>
      <Container
        bg="wheat"
        position="absolute"
        marginTop="-1rem"
        minH="100%"
        paddingBottom="3rem"
        minW="100vw"
      >
        <Heading>Tranquil Services</Heading>
        <ServiceCard
          title="Manicure"
          img="https://images.pexels.com/photos/10123923/pexels-photo-10123923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          text="Enjoy a manicure to keep your nails as calm as a tranquil sea"
        />
        <ServiceCard
          title="Pedicure"
          img="https://media.istockphoto.com/id/1173495015/photo/female-hands-with-white-manicure-and-pedicure-on-pink-and-blue-background-top-view.jpg?b=1&s=612x612&w=0&k=20&c=BZiLZAHXmWTShxZa89XsNJ_nnQb53B4c1miva8-Uzro="
          text="Enjoy a calming pedicure"
        />
        <ServiceCard
          title="Beautiful Hair Styling"
          img="https://images.pexels.com/photos/3812743/pexels-photo-3812743.jpeg?auto=compress&cs=tinysrgb&w=400"
          text="Reinvigore your feeling of beauty with a One-Of-A-Kind hair style"
        />
        <Heading mt="1rem">Meet The Staff</Heading>
        <StaffCard
          name="Rosanne"
          portrait="https://images.pexels.com/photos/14057676/pexels-photo-14057676.jpeg?auto=compress&cs=tinysrgb&w=400"
          description="Founder and Lead Hair Stylist"
        />
      </Container>
    </div>
  );
}

export default Home;
