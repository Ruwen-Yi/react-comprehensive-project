import styled from 'styled-components';
import MemberList from './MemberList.js';

const StyledMemberBoard = styled.div`
    width: 40vw;
    height: 10vh;
    padding: 10px;
    background-color: #E8C499;

    display: flex;
    justify-content: space-between;
    align-items: center;
`
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
const StyledMemberListContainer = styled.div`
    width: auto;
    height: 100%;
    margin: 0 5px;
    white-space: nowrap;
    overflow: hidden;
`

export default function MemberBoard() {
    return (
        <StyledMemberBoard>
            <StyledArrow>&#8592;</StyledArrow>
            <StyledMemberListContainer>
                <MemberList />
            </StyledMemberListContainer>
            <StyledArrow>&#8594;</StyledArrow>
        </StyledMemberBoard>
    )
}