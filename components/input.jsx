import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  border: 1px solid var(--primary-light);
  padding: 10px;
  text-transform: uppercase;
`

const Input = (props) => <StyledInput {...props}  />

export default Input