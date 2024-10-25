import { useState } from "react";


export default function AdminSection(){

    const [file, setFile] = useState(null); // 파일 업로드
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    return(
        <>
            <h1>어드민섹션</h1>
        </>
    )
}