import { useEffect, useState } from "react"
import styled from "styled-components"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"



export default function TodoContainer(){
    //리스트를 빈 목록으로 초기화
    const [list, setList] = useState([])    //리스트를 여러개를 받아오기 때문에 빈 배열로 초기화
    const [filter, setFilter] = useState('All')
    const [filterList, setFilterList] = useState(list)

    useEffect(()=>{
        listFilter();
    },[list, filter])

    const addList = (listName) => {
        const newList = {id: Date.now(), name: listName, completed: false}    // id Date.now(는 권장하는 방법이 아님)
        setList([...list, newList])
        console.log(newList)
    }

    const handleToggleCheck = (id) => {
        setList(list.map((item)=>
            item.id === id ? {...item, completed : !item.completed} : item
        ))
    }

    const listFilter = () => {
        switch(filter){
            case 'Active' :
                setFilterList(list.filter((item) => !item.completed));
                break;
            case 'Completed' :
                setFilterList(list.filter((item) => item.completed));
                break;
            default : 
                setFilterList(list)
        }
    }

    const handleFilterChange = (newfilter) => {
        setFilter(newfilter);
    }

    const listCountText = () => {
        const count = filterList.length;
        return count === 0 ? `no items` : (count === 1 ? `${count} item` : `${count} items`);
    }

    const handleDeleteItem = (id) => {
        setList(list.filter((el) => el.id !== id))

    }

    return(
        <Container>
            <Header>
                <Title>Todo List</Title>
                <DateText>{new Date().toDateString()}</DateText>
                <DataList>
                    <ListCount>{listCountText()}</ListCount>
                    <Filters>
                        {['All', 'Active', 'Completed'].map((type)=>(
                            <FilterBtn 
                                key={type} 
                                active={filter === type}
                                onClick = {()=>handleFilterChange(type)}
                            >
                                {type}
                            </FilterBtn>
                        ))}
                    </Filters>
                </DataList>

            </Header>

            <TodoForm onAddList={addList}/>
            
            <ListContainer>
                {filterList.length === 0 ? (
                    <p>TodoList가 없습니다.</p>
                ) : (
                    filterList.map((el) => (
                            <TodoList 
                                key={el.id}
                                list={el}
                                onToggle = {handleToggleCheck}
                                onDelete = {handleDeleteItem}
                                />
                        )
                    )
                ) }
            </ListContainer>

        </Container>    //container
    )

}


const Container = styled.div`
        width: 100%;
        max-width: 600px;
        background-color: #fff;
        border-radius: 20px;
        padding: 24px;
        box-sizing: border-box;
        box-shadow: 0px 20px 60px rgba(0,0,0,0.5);
`

const Header = styled.header`
    /* text-align: center; */
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 700;
`

const DateText = styled.p`
    font-size: 14px;
    color: rgba(0,0,0,0.6);
`

const ListContainer = styled.div`
    
    max-height: 60vh;
    overflow: auto;
    p{
        text-align: center;
        font-size: 12px;
    }
`

const DataList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px 0px;
`

const Filters = styled.div`
    display: flex;
    justify-content: center;
`

const FilterBtn = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: ${({active})=> (active ? '#fff' : '#000')};
    background-color: ${({active})=> (active ? '#000' : 'transparnet')};
    padding: 6px 12px;
    border-radius: 12px;
    font-size: 14px;
    &:hover{
        background-color: #000;
        color: #fff;
    }
`

const ListCount = styled.p`
    font-size: 16px;
    color: #666;
`