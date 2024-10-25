import { useContext, useRef, useState } from "react";
import { CategoryContext } from "../context/CategoryContext";
import styled from "styled-components";


export default function AdminSection(){

    const [file, setFile] = useState(null); // 파일 업로드
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const {categoryList} = useContext(CategoryContext);
    // console.log(categoryList)

    const fileRef = useRef();

    const colors = ['#fff', '#000', '#fdbb2d', '#775305', '#ff9ff9', '#999999', '#000099']

    const [product, setProduct] = useState({
        title: '',
        price: '',
        size: '',
        category: '',
        description: '',
        colors : [],
    })  //모든 상품의 상태를 빈 문자열로 초기화


    // 업로드 함수들
    const productInfoChange = (e) => {
        const {name, value, files} = e.target;
        if(name === 'file' && files && files[0]){
            setFile(files[0])
        } else{
            setProduct((prev)=>({...prev, [name]:value}))
        }
    }


    return(
        <Container>
            <h1>상품 업로드</h1>
            <FormContainer>
                <div className="imgUploadWrap">
                    {file && (
                    <img src={URL.createObjectURL(file)}/>
                    )}
                        {/* createObjectURL = url주소를 string형태로 변환 */}
                    
                </div>
                <form>
                    <input
                        type="file"
                        name="file"
                        accept="image/*"
                        onChange={productInfoChange}
                        ref={fileRef}
                    />
                    {/* 이미지 업로드 */}

                    <input 
                        type="text"
                        name="title"
                        placeholder="상품명을 입력하세요"
                        value={product.title}
                        onChange={productInfoChange}
                    />
                    {/* 상품명 업로드 */}

                    <input 
                        type="text"
                        name="price"
                        placeholder="상품 가격을 입력하세요"
                        value={product.price}
                        onChange={productInfoChange}
                    />
                    {/* 상품 가격 업로드 */}

                    <select
                        name="category"
                        value={product.category}
                        onChange={productInfoChange}>
                            <option value={''}>분류 선택</option>
                            {categoryList.map((el, idx) => (
                                <option key={idx} value={el}>{el}</option>
                            ))}
                        </select>
                    {/* 카테고리 */}

                    <input
                        type="text"
                        name="size"
                        placeholder="상품 옵션을 ,로 구분해서 입력하세요."
                        value={product.size}
                        onChange={productInfoChange}
                    />
                    {/* 상품 사이즈 */}

                    <ColorChipWrap>
                        {colors.map((color,idx) => {
                            <div className="colorChipItem" key={idx} style={{backgroundColor : color}}></div>
                        })}
                    </ColorChipWrap>

                </form>
            </FormContainer>
        </Container>
    )
}

const Container = styled.div`
    
`

const FormContainer = styled.div`
    max-width: 1200px;
    padding: 30px 0px;
    margin: 0 auto;
    display: flex;
    gap: 40px;
    .imgUploadWrap{
        max-width: 400px;
        height: auto;
        img{
            display: block;
            height: 100%;
        }
    }

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        input{
            width: 100%;
            box-sizing: border-box;
            height: 50px;
            border-radius: 4px;
            border-color: rgba(0,0,0,0.2);
            padding: 6px 12px;
        }
    }
`