import TodoItem from "./TodoItem.js"
import { CListGroup, CListGroupItem, CFormCheck } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import styled from "styled-components"

const StyledCListGroupItem = styled(CListGroupItem)`
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

export default function TodoList() {
    return (
        <CListGroup>
            <StyledCListGroupItem>
                <CFormCheck hitArea="full" label="purchases a wand" value="" id="firstCheckboxStretched" />
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