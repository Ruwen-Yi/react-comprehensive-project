import styled from 'styled-components';

const StyledMember = styled.li`
    padding: 10px;
    background: #deaa6b;

    font-size: 30px;
    font-weight: bold;
    text-align: center;
    color: white;
    
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