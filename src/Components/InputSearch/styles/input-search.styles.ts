import styled from 'styled-components'
import TextField from '@mui/material/TextField'

export const InputContainer = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Open+Sans);
  background-color: #0d1f2dff;
  font-family: 'Open Sans', sans-serif;
`
export const InputWrap = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
`

export const Input = styled(TextField)`
  width: 80%;
  background-color: white;
  border-radius: 0.5rem;
  outline: none;
`
