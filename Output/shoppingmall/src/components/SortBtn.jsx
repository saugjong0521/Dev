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