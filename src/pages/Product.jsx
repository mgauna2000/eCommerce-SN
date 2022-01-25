import styled from "styled-components";
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Container = styled.div`

`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const Product = () => {
  return (
      <Container>
          <Navbar/>
          <Announcement/>
          <Wrapper>
            <ImgContainer>
              <Image src="https://tienda-m.com.ar/wp-content/uploads/2021/10/tokyo-revengers-wallpaper.jpg" />
            </ImgContainer>
            <InfoContainer>
              <Title>Remera Anime Personalizada</Title>
              <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione unde, illo quisquam explicabo accusamus id, recusandae eaque tempore corrupti ex consequuntur, libero voluptatibus? Non dolor ab, corrupti rem sapiente reiciendis.</Desc>
              <Price>$ 20</Price>
              <FilterContainer>
                <Filter>
                  <FilterTitle>Color</FilterTitle>
                  <FilterColor color="black" />
                  <FilterColor color="darkblue" />
                  <FilterColor color="gray" />
                </Filter>
                <Filter>
                  <FilterTitle>Color</FilterTitle>
                  <FilterColor color="black" />
                  <FilterColor color="darkblue" />
                  <FilterColor color="gray" />
                </Filter>
              </FilterContainer>
            </InfoContainer>
          </Wrapper>
          <Newsletter/>
          <Footer/>
      </Container>
  )
};

export default Product;
