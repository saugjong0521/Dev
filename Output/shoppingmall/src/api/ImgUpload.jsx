

export async function uploadImg(file){
    try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', REACT_APP_CLOUDINARY_PRESET);

        const res = await fetch(REACT_APP_CLOUDINARY_URL, {

            method: 'POST',
            body: formData,
        });
        if(!res.ok){
            console.error(res.state)
        }
        const data = await res.json();
        console.log(data)
        return data.url;
    } catch(error){
        console.error(error)
    }
}