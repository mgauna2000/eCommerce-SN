import { Send } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
    height: 40vh;
    background-color: #CAE4E2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`;
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: #fff;
    cursor: pointer;
`;


const Newsletter = () => {
  return (
      <Container>
          <Title>Novedades</Title>
          <Description>Mira las novedades de tus prductos favoritos</Description>
          <InputContainer>
            <Input placeholder='Su Email' />
            <Button>
                <Send />
            </Button>
          </InputContainer>
      </Container>
  )
};

export default Newsletter;
