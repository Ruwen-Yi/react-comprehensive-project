import '@coreui/coreui/dist/js/coreui.bundle.min.js'

let selectStyle = {
    borderWidth: "0",
    boxShadow: "0px 0px 10px 5px #5e594f",
    backgroundColor: "transparent",
}

export default function MemberBoard({members}) {
    return (
        <select
            className="form-select form-select-lg"
            aria-label=".form-select-lg example"
            style={selectStyle}
        >
            {members.map(member => (
                <option value={member}>
                    {member}
                </option>
            ))}
        </select>
    )
}