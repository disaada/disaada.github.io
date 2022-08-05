import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 5px 10px;
  text-transform: uppercase;
  color: #fff;
  background-color: var(--primary-light);
  border: 0;
`

const Button = (props) => <StyledButton {...props}  />

export default Button