import { useNavigate } from 'react-router-dom';
import { HeaderPage, Title } from './style';

const Header = () => {
  const navigate = useNavigate();
  
  const onClick = () => {
    navigate('/');
  };
  
  
  return(
    <HeaderPage>
      <Title onClick={onClick}>Salary Simulator</Title>
    </HeaderPage>
  );
};

export default Header;
