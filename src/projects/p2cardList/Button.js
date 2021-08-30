
import styled, { css } from 'styled-components'
const Button = styled.button`
    ${props =>
        props.color && css`
            background-color: ${props.length > 2 ? props.theme[props.color] : props.length < 2 ? 'red' : 'lightpink'};
            color: ${props.length <= 1 ? 'white' : 'black'};`
    }
    border: none;
    padding: 5px 15px;
    font-weight: ${props => props.length <= 1 ? 'bold' : 'normal'};
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
`

export default Button