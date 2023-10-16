import { CListGroup, CListGroupItem, CFormCheck, CButton } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import styled from "styled-components"

const StyledCListGroupItem = styled(CListGroupItem)`
    width:35vw;
    
    input[type='checkbox'],
    input[type='checkbox']:checked {    
        border-color: #a4a9ac;
        box-shadow: none;
    }

    input[type='checkbox']:checked {
        background-color: #a4a9ac;
    }

    input[type='checkbox']:checked + label {
        font-style: italic;
        color: #a4a9ac;
        text-decoration: line-through;
    }
`

// use coreUI's built-in classes to layout three containers element.
// - containers of a list item, a input/label group, and a button group.
// - a list item is composed of a input/label group(i.e, CFormCheck), and a button group.
let listItemContainerClasses = "d-flex justify-content-between fs-5 bg-transparent";
let labelContainerClasses = "d-inline-block text-wrap text-break";
let buttonContainerClasses = "d-inline-flex align-items-end z-1";

export default function TodoList() {
    return (
        <CListGroup>
            <StyledCListGroupItem className={listItemContainerClasses}>
                <div className={labelContainerClasses}>
                {/* an id is necessary for CFormCheck to be clickable */}
                <CFormCheck 
                    hitArea="full" 
                    className="d-inline" 
                    label="purchases a wand" 
                    id='input-label-0'
                />
                </div>
                <div className={buttonContainerClasses}>
                    <CButton className="me-1 rounded-pill" color="dark">Edit</CButton>
                    <CButton className="rounded-pill" color="dark">Cancel</CButton>
                </div>
            </StyledCListGroupItem>
            <StyledCListGroupItem className={listItemContainerClasses}>
                <div className={labelContainerClasses}>
                {/* an id is necessary for CFormCheck to be clickable */}
                <CFormCheck 
                    hitArea="full" 
                    className="d-inline" 
                    label="purchases a wand" 
                    id='input-label-1'
                />
                </div>
                <div className={buttonContainerClasses}>
                    <CButton className="me-1 rounded-pill" color="dark">Edit</CButton>
                    <CButton className="rounded-pill" color="dark">Cancel</CButton>
                </div>
            </StyledCListGroupItem>
        </CListGroup>
    )
}