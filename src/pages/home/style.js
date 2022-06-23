import styled from 'styled-components';

const Container = styled.div`
    width: 70%;
    height: 600px;

    border-radius: 10px;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    gap: 50px;

    background-color: #121212;
    box-shadow: 0 3px 15px rgba(245, 40, 145, 0.8);

    @media (max-width: 840px) {
        width: 80%;
    }
`;

const ContainerAbout = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const Salutation = styled.h1`
    margin-bottom: 30px;

    color: white;

    font-weight: 800;
    font-size: 35px;
    letter-spacing: 5px;
    text-align: center;
`;

const Description = styled.p`
    color: white;

    font-weight: 400;
    font-size: 20px;
    letter-spacing: 3px;
    text-align: center;
    line-height: 25px;

    @media (max-width: 840px) {
        width: 240px;
    }
`;

const Modalities = styled.div`
    @media (max-width: 840px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const Title = styled.span`
    color: white;

    font-weight: 300;
    font-size: 18px;
    letter-spacing: 2px;
    text-align: center;
`;

const Options = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 840px) {
        width: 80%;
    }
`;

const Option = styled.button`
    width: 160px;
    height: 50px;

    cursor: pointer;

    background-color: #ff4791;
    color: white;

    margin-top: 15px;

    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.4px;
    text-transform: uppercase;
`;

export {
    Container,
    ContainerAbout,
    Salutation,
    Description,
    Modalities,
    Title,
    Options,
    Option,
}
