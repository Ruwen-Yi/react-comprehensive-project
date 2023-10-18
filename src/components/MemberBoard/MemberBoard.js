import '@coreui/coreui/dist/js/coreui.bundle.min.js'

// the custom style for the member selection list
let selectStyle = {
    borderWidth: "0",
    boxShadow: "0px 0px 10px 5px #5e594f",
    backgroundColor: "transparent",
}

export default function MemberBoard({ memberList, selectedMember, onMemberChange }) {
    return (
        <select
            className="form-select form-select-lg"
            aria-label=".form-select-lg example"
            style={selectStyle}
            defaultValue={selectedMember}
            onChange={onMemberChange}
        >
            {memberList.map(member => {
                const {id, name} = member;
                return (
                    <option 
                        value={id}
                        key={id}
                    >
                        {name}
                    </option>
                )
            })}
        </select>
    )
}