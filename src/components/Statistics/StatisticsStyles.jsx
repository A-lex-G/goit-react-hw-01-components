const { default: styled } = require("styled-components");

export const StatsItem = styled.li`
background-color: ${function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
} }
`