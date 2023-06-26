import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: darkblue;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super sale! All items are under $100</Container>;
};

export default Announcement;