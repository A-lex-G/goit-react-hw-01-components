const { default: styled } = require("styled-components")

export const Status = styled.span`
    background-color: ${({isOnline})=> isOnline ? 'yellowgreen' : 'crimson'} 
`