import PropTypes from "prop-types"


export default function SortBtn({sortName, sortPrice}){

    return(
        <>
            <button onClick={sortName}>이름순</button>
            <button onClick={sortPrice}>가격순</button>
        </>
    )

}

SortBtn.PropTypes = {
    sortName : PropTypes.func.isRequired,
    sortPrice : PropTypes.func.isRequired,
}
// proptypes는 타입에 대한 검증
// func는 함수형 타입이어야 하며, isRequired는 반드시 전달되야 하는 값