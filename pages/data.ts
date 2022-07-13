export type Data = {id:number, advice:string}
export const getAdvice = async() =>{
    const  result = await(await fetch(`https://api.adviceslip.com/advice`)).json()
    return {'id': result.slip.id , 'advice': result.slip.advice}
}

