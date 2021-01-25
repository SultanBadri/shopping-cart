import styled from "styled-components";

interface IsPurchased {
  setPurchased: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalDiv = styled.div`
  position: absolute;
  padding: 2rem 6rem;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  text-align: center;
  font-family: "arial";
  background: #3e4242;
  color: white;
  @media (max-width: 420px) {
    padding: 2rem 3rem;
  }
  @media (max-width: 360px) {
    padding: 1rem 2rem;
  }
`;

const H1 = styled.h1`
  white-space: nowrap;
`;

const Paragraph = styled.p`
  padding: 0.5rem;
  font-size: 1.2rem;
  white-space: nowrap;
  color: #cccccc;
`;

const Button = styled.div`
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 8px;
  width: 50%;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.3s ease;
  background: gray;
  &:hover {
    background: #1b7fbd;
    color: white;
  }
`;

const PurchaseModal: React.FC<IsPurchased> = ({ setPurchased }) => {
  return (
    <ModalDiv>
      <H1>Thank you for your purchase!</H1>
      <Paragraph>We'll send over your planet real soon!</Paragraph>
      <Button onClick={() => setPurchased(false)}>Close</Button>
    </ModalDiv>
  );
};

export default PurchaseModal;