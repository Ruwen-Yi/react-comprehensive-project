import { CFormCheck, CButton } from '@coreui/react';

// use coreUI's built-in classes to layout containers
// of the input/label group and the button group.
let labelContainerClasses = "d-inline-block text-wrap text-break";
let buttonContainerClasses = "d-inline-flex align-items-end z-1";

export default function TodoItem({ id, text, state }) {
    return (
        <>
            <div className={labelContainerClasses}>
                {/* an id is necessary for CFormCheck to be clickable */}
                <CFormCheck
                    hitArea="full"
                    className="d-inline"
                    label={text}
                    id={'input-label-' + id}
                    defaultChecked={state==='done'}
                />
            </div>
            <div className={buttonContainerClasses}>
                <CButton className="me-1 rounded-pill" color="dark">Edit</CButton>
                <CButton className="rounded-pill" color="dark">Cancel</CButton>
            </div>
        </>
    )
}