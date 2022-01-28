import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option`

`;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Remeras</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar productos:</FilterText>

          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Blanco</Option>
            <Option>Nergo</Option>
            <Option>Rojo</Option>
            <Option>Azul</Option>
            <Option>Amarrilo</Option>
            <Option>Verde</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Talle
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Orden de los productos:</FilterText>
          <Select>
            <Option selected>La mas nueva</Option>
            <Option>Precio (menor)</Option>
            <Option>Precio (mayor)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
