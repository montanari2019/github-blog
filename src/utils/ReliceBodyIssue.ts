export function ReliceBodyIssue(body: string){
    
    const arrayConverterd = body.split('')
     
    const identifyCaracter =  arrayConverterd.findIndex(element => element === "#")

    if(identifyCaracter !== -1){
        const newArryaSlice = arrayConverterd.slice((identifyCaracter + 1))
        const regex = ","
        const joinString = newArryaSlice.join('').replace(regex, ',')
        
        return joinString
    }else{
        return arrayConverterd.join('')
    }

}