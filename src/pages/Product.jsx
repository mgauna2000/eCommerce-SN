import styled from "styled-components";
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Container = styled.div`

`;

const Product = () => {
  return (
      <Container>
          <Navbar />
          <Announcement />
      </Container>
  )
};

export default Product;
