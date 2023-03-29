export function EncodedBase64(value:string){
    // console.log("Encoded base64 ",btoa(value))
    return btoa(value)
}

export function DecodedBase64(value?:string){

    const base64Test = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;

    if(value && base64Test.test(value)){
        const newBase64 = String((window.atob(value)).trim())
        return newBase64
    }else{

        console.log("Decode Base64, falou miserávelmente")
    }
}