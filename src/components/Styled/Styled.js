import styled from 'styled-components';

const Button = styled.button`
  float: ${props => (props.left ? "left" : "right")};
  cursor: pointer;
  padding: 10px 15px;
  background: #131e29;
  border: 1px solid #3c4c5e;
  color: white;
  padding: 10px 15px;
  font-size: 1rem;
  border-radius: 3px;
  transition: all 0.3s ease;
  margin-bottom: 10px;
  letter-spacing: 1px;
  &:hover {
    background: #3d383a;
    border-color: #f29559;
  }
  &:active,
  &:focus {
    outline: none;
    border-color: #f29559;
  }
`;

const Title = styled.h2`
  background: #3c4c5e;
  color: white;
  padding: 10px 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  font-size: 1.5rem;
  font-weight: 400;
`;

const Input = styled.input`
  font-family: 'Karla', sans-serif;
  background: #131e29;
  border: 1px solid #3c4c5e;
  color: white;
  text-align: center;
  padding: 10px 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0px 6px 6px 0px;
  font-size: 1.5rem;
  font-weight: 400;
  transition: all 0.3s ease;
  &:hover {
    
    border-color: #f29559;
  }
  &:active,
  &:focus {
    background: #3d383a;
    border-color: #f29559;
    outline: none;
  }
`;

export default Button;
export {Title, Input};