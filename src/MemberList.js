import styled from 'styled-components';

const StyledArrow = styled.div`
    height: 100%;
    padding: 0.5em 0;
    font-size: 24px;
    cursor: pointer;

    &:hover {
        font-weight: bold;
        color: yellow;
    }
`

const StyledMemberList = styled.div`
    width: 40vw;
    height: 10vh;
    padding: 10px;
    background-color: #E8C499;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledMemberButton = styled.button`
    width: auto;
    height: 100%;
    padding: 10px;
    margin: 0 10px;
    background: #deaa6b;
    border: none;
    outline: none;

    color: white;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    
    cursor: pointer;

    &:hover{
        color: yellow;
    }
`

export default function MemberList() {
    return (
        <StyledMemberList>
            <StyledArrow>&#8592;</StyledArrow>
            <div>
                <StyledMemberButton>Harry Potter</StyledMemberButton>
                <StyledMemberButton>Peter Parker</StyledMemberButton>
                <StyledMemberButton>Jhon Smith</StyledMemberButton>
            </div>
            <StyledArrow>&#8594;</StyledArrow>
        </StyledMemberList>
    )
}