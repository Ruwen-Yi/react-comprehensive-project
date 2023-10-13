import styled from 'styled-components';

const StyledMember = styled.li`
    padding: 10px;
    background: #deaa6b;
    border: none;
    outline: none;

    color: white;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    
    cursor: pointer;
    display: inline-block;

    &:hover{
        color: yellow;
    }
`

const MemberList = (props) => {
    return (
        <ul>
            <StyledMember>Jhon Smith</StyledMember>
            <StyledMember>Jhon Smith</StyledMember>
            <StyledMember>Jhon Smith</StyledMember>
            <StyledMember>Jhon Smith</StyledMember>
        </ul>
    )
}

export default MemberList;