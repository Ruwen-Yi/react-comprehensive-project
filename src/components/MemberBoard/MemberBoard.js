import '@coreui/coreui/dist/js/coreui.bundle.min.js'

// the custom inline style for the member selection list
const selectStyle = {
    borderWidth: "0",
    boxShadow: "0px 0px 10px 5px #5e594f",
    backgroundColor: "transparent",
}

/**
 * display the member list
 * @typedef {Object} props
 * @property {Array} memberList contain all members' id and full name
 * @property {number} selectedMember the selected member's id
 * @property {Function} onMemberChange update the selectedMember and todo list when member changed 
 */
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