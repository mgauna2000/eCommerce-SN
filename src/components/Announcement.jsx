import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
`;

const Announcement = () => {
    return (
        <Container>
            Super oferta! Envio gratis en compra de mas de $3500
        </Container>
    )
}

export default Announcement
