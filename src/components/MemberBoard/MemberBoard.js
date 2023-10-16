import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react'


export default function MemberBoard() {
    return (
        <CDropdown variant="btn-group">
            <CDropdownToggle color="secondary" size="lg">Large button</CDropdownToggle>
            <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownItem href="#">Something else here</CDropdownItem>
                <CDropdownItem href="#">Separated link</CDropdownItem>
            </CDropdownMenu>
        </CDropdown>
    )
}