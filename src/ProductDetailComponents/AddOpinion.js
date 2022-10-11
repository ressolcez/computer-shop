import React from 'react'
import styled from 'styled-components';
import Button from '@mui/material/Button';
import AddCommentIcon from '@mui/icons-material/AddComment';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
`

const AddOpinionInputWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const AddOpinionButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2%;
  margin-bottom: 2.5%;

`
const InputOpinion = styled.input`
        border: 1px solid rgba(0, 0, 0, 0.34);
        border-radius: 20px;
        width: 60%;
        padding: 5px;
        padding-bottom: 50px;
        word-wrap: break-word;
        word-break: break-all;
        :focus {outline:none;}
`

function AddOpinion() {
  return (
    <Container> 
        <AddOpinionInputWrapper>
          <InputOpinion type = "text"/>
        </AddOpinionInputWrapper>
        <AddOpinionButtonWrapper>
        <Button variant="contained" endIcon={ <AddCommentIcon />} >
          Dodaj Opinie
        </Button>
        </AddOpinionButtonWrapper>
    </Container>
  )
}

export default AddOpinion