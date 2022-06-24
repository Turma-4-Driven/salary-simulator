import styled from 'styled-components';

const FormInfos = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerInfos = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  gap: 100px;

  @media (max-width: 840px) {
    flex-direction: column;
    align-items: flex-start;

    gap: 0;
  }
`;

const ContainerInputsInfo = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;


  @media (max-width: 840px) {
    width: 100%;
    margin: 20px 0;

    div {
      align-items: center;
      justify-content: center;
    }
  }
`;

const Title = styled.strong`
  color: white;
  margin: 10px 0 10px 0;

  font-weight: 400;
  font-size: 18px;
  letter-spacing: 3px;
`;

const Name = styled.span`
  color: white;
  margin: 8px 0 5px 0;

  font-weight: 300;
  font-size: 16px;
  letter-spacing: 2px;
`;

const Modality = styled.h1`
  color: white;

  font-weight: 700;
  font-size: 25px;
  letter-spacing: 3px;
`;

const InputForm = styled.input`
  width: 250px;
  height: 35px;

  background-color: #121212;
  color: white;
  
  border-radius: 3px;
  border: 1px solid #ff4791;

  outline: none;

  padding-left: 10px;
  margin: 5px 0 15px 0;

  ::placeholder{
    color: white;
    opacity: 0.5;
  }
`;

const Calculate = styled.button`
  width: 200px;
  height: 42px;

  background-color: #ff4791;
  color: white;

  margin: 20px 0;

  cursor: pointer;

  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  @media (max-width: 840px) {
    width: 150px;

    margin: 0 0 30px 0;
  }
`;

export {
  FormInfos,
  ContainerInputsInfo,
  ContainerInfos,
  Modality,
  Title,
  InputForm,
  Calculate,
  Name,
};
