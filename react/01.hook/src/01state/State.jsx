export default function State() {
    const [name, setName] = useState('홍길동');
    console.log(name)
    console.log(useState)

    return (
        <>
            <p>{name}</p>
            <button onClick={() => setName('lee')}>이름변경</button>
        </>
    )
}