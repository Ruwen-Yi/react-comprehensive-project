import { CListGroup, CListGroupItem, CFormCheck } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import '../../css/custom-checkbox.css'

export default function TodoListAlternative() {
    return (
        <CListGroup>
            <CListGroupItem className="custom-checkbox">
                <CFormCheck hitArea="full" label="purchases a wand" value="" id="firstCheckboxStretched" />
            </CListGroupItem>
            <CListGroupItem className="custom-checkbox">
                <CFormCheck hitArea="full" label="purchases a wand" value="" id="secondCheckboxStretched" />
            </CListGroupItem>
            <CListGroupItem className="custom-checkbox">
                <CFormCheck hitArea="full" label="purchases a wand" value="" id="thirdCheckboxStretched" />
            </CListGroupItem>
        </CListGroup>
    )
}