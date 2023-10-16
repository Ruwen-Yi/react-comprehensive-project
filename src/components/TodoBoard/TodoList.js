import TodoItem from "./TodoItem.js"
import { CListGroup, CListGroupItem, CFormCheck } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import styled from "styled-components"

const StyledCListGroupItem = styled(CListGroupItem)`
    width:35vw;

    input[type='checkbox'],
    input[type='checkbox']:checked {    
        border-color: grey;
        box-shadow: none;
    }

    input[type='checkbox']:checked {
        background-color: grey;
    }

    input[type='checkbox']:checked + label {
        text-decoration: line-through;
    }
`

const StyledButton = styled.button`
    display: inline-block;
`

export default function TodoList() {
    return (
        <CListGroup>
            <StyledCListGroupItem>
                <CFormCheck hitArea="full" label="purchases a wand" value="" id="firstCheckboxStretched" />
                <StyledButton>Edit</StyledButton>
                <button>Cancel</button>
            </StyledCListGroupItem>
            
            <StyledCListGroupItem>
                <CFormCheck hitArea="full" label="purchases a wand" value="" id="secondCheckboxStretched" />
            </StyledCListGroupItem>
            <StyledCListGroupItem>
                <CFormCheck hitArea="full" label="purchases a wand" value="" id="thirdCheckboxStretched" />
            </StyledCListGroupItem>
        </CListGroup>
    )
}