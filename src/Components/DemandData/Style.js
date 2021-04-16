import styled from 'styled-components';
import colors from '../../Constants/colors';

export const DemandCard = styled.div`
    height: min-content;
    width: 30%;
    background-color: ${colors.secondary};
    border-radius: 15px;
    border: 1.5px solid black;
    margin: 1.5% 1.5% 1.5% 0;
    textDecorationLine: 'none';
    @media(max-width: 750px){
        width: 100%;
    }
`;

export const DemandTitle = styled.div`
    height: min-content;
    width: 100%;
    font-size: 2.5vh;
    text-align: center;
    font-weight: bold;
    border-radius: 15px;
    padding: 5%;
`;

export const ClientName = styled.div`
    height: 10%;
    width: 100%;
    margin-top: 5%;
    margin-left: 1vw;
`;

export const SectorName = styled.div`
    height: 10%;
    width: 100%;
    margin-left: 1vw;
`;

export const ProcessNumber = styled.div`
    height: 10%;
    width: max-content;
    margin-left: 1vw;
`;

export const DemandCreatedAt = styled.div`
    height: 10%;
    width: min-content;
    margin-right: 1vw;
`;

export const CategoryField = styled.div`
    height: 40%;
    margin-left: 1vw;
    background-color: ${colors.backgroundColor};
    display: flex;
    flex-wrap: wrap;
    
`;

export const CategoryName = styled.p`
  border-radius: 12px;
  padding: 1%;
  text-align: center;
  color: ${colors.secondary};
  background-color: ${(props) => `${props.color}`};
  font-size: 2vh;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Montserrat';
  width: 42%;
  margin: 1.5% 3% 3% 3%;
  @media(max-width: 750px){
    font-size: 1.5vh;
    font-weight: 900;
    align-items: center;
    margin-left: 1vw;
  }
`;
