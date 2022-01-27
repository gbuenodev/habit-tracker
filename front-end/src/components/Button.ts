import styled from 'styled-components';

const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #FF4B2B;
  background-color: #FF4B2B;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
`;

const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #FFFFFF;
`

export default {
  Button,
  GhostButton
}
