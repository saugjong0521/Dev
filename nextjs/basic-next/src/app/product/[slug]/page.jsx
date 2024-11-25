export default function ProductDetailPage({params}){
    return(
        <h1>{params.slug} 상세페이지</h1>
    )
}

/*
정적인 라우팅은 미리 만들어진 폴더를 기준으로 라우팅을 사용해서 페이지를 구성하는 방식
고정된 아이템을 출력하는데 주로 사용

하지만 쇼핑몰처럼 많은 카테고리와 아이템을 관리해야 한다면, 모든 페이지 폴더를 만들 수 없기에
정적인 라우팅보다 동적인 라우팅을 사용해서 사용자가 요청한 카테고리나 아이템명을 동적으로 페이지를 생성해서 사용하는 방식이 더 선호된다.

동적인 라우팅을 사용할 때에는 폴더명에 [키워드명]을 사용하며,
키워드는 원하는 이름 아무거나 사용해도 되지만, 보통 slug라는 이름을 사용한다.


*/