import { useNavigate } from 'react-router-dom';

import { Simulation } from './style';

const NewSimulation = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/simulator');
  };
  
  return(
    <Simulation onClick={handleClick}>Fazer nova simulação</Simulation>
  );
};

export default NewSimulation;
