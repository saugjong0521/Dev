

export async function uploadImg(file){
    try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset');
    }
}