

export default function Login () {
    return (
        <>
            <h1>로그인 페이지</h1>
            <input type="text" 
                value={userName} 
                onChange={(e)=>setUserName(e.target.value)}/>
        </>
    )
}