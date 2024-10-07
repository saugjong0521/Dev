import styled, { css } from "styled-components"



export default function TodoList({list, onToggle, onDelete}){



    return(

        <ListBox>
            <ListItem completed={list.completed}>
            <Checkbox type="checkbox"
                    checked={list.completed}
                    onChange={()=>(onToggle(list.id))}
                    />
                {list.name}
            </ListItem>
            <DeleteBtn onClick={()=>onDelete(list.id)}>X</DeleteBtn>
        </ListBox>

    )
}


const ListBox = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;
    border-top: solid 1px #ddd;
    background-color: rgba(0,0,0,0.1);
    transition: 300ms;
    &:hover{
        background-color: rgba(0,0,0,0.3);
    }
`

const ListItem = styled.span`
    flex: 1;
    margin-right: auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;    //텍스트 말줄임 표시(...) , clip은 잘림표시
    ${({completed}) => 
        completed && css`
            text-decoration: line-through rgba(0,0,0,0.5);
        `
    }
`

const Checkbox = styled.input`
    width: 15px;
    margin-right: 5px;
    justify-content: center;
    align-items: center;
`

const DeleteBtn = styled.button`
    border: none;
    width: 10px;
    height: 20px;
    background: transparent;
    cursor: pointer;
    color: red;
    margin-right: 0;
`