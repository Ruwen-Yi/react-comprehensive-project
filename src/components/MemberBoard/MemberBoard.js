import '@coreui/coreui/dist/js/coreui.bundle.min.js'

let selectStyle = {
    borderWidth: "0",
    boxShadow: "0px 0px 10px 5px #5e594f",
    backgroundColor: "transparent",
}

export default function MemberBoard() {
    return (
        <select
            className="form-select form-select-lg"
            aria-label=".form-select-lg example"
            style={selectStyle}
        >
            <option selected="">Harry Potter</option>
            <option value={1}>Harry Potter One</option>
            <option value={2}>Harry Potter Two</option>
            <option value={3}>Harry Potter Three</option>
        </select>
    )
}