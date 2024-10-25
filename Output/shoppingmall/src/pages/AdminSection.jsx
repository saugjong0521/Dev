import { useContext, useRef, useState } from "react";
import { CategoryContext } from "../context/CategoryContext";


export default function AdminSection(){

    const [file, setFile] = useState(null); // 파일 업로드
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const {categoryList} = useContext(CategoryContext);
    // console.log(categoryList)

    const fileRef = useRef();

    const colors = ['#fff', '#000', '#fdbb2d', '#775305', '#ff9ff9', '#999999', '#000099']

    const [products, setProducts] = useState({
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
            setProducts((prev)=>({...prev, [name]:value}))
        }
    }


    return(
        <Container>
            <h1>상품 업로드</h1>
            <FormContainer>
                <div className="imgUploadWrap">
                        <img src={URL.createObjectURL(file)}/>
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
                </form>
            </FormContainer>
        </Container>
    )
}

const 