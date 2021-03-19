import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import colors from '../../Constants/colors';

const Button = styled.button`

    font: Open Sans;
    font-size: 3vh;
    color: ${colors.secondary};
    width: 105%;
    height: 100%;
    background-color: ${colors.primary};
    border-radius: 1vw;
    border: 2% solid ${colors.primary};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    float: right;
    text-decoration-line: none;

    @media(max-width: 750px){
      border-radius: 40vw;
      width: 100%;
    }

`;

export default Button;

// export const StyledLink = styled(Link)`
//     color: 'white',
//     text-decoration-line: 'none',
//     font-size: '1.5vw',
//     @media(max-width: 750px){
//       width: 80%,
//       height: 100%,
//       margin-right: 0px,
//       margin-bottom: 5px,
//       color:'white',
//       }
// `;
