import '@coreui/coreui/dist/js/coreui.bundle.min.js'

let selectStyle = {
    borderWidth: "0",
    boxShadow: "0px 0px 10px 5px #5e594f",
    backgroundColor: "transparent",
}

export default function MemberBoard({ memberList, selectedMember }) {
    return (
        <select
            className="form-select form-select-lg"
            aria-label=".form-select-lg example"
            style={selectStyle}
        >
            {memberList.map(member => {
                const {id, name} = member;
                return (
                    <option 
                        value={id}
                        key={id}
                        selected={selectedMember === id}
                    >
                        {name}
                    </option>
                )
            })}
        </select>
    )
}