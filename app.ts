const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

const numResult: Array<number> = [] // generic 
const strResult: string[] = []

type NumOrStr = number | string   // used to reduce the redundancy code and optimize the code
type Result =  {val:number;timestamp:Date}
 
interface ResultObj {  // used instead of types
    val:number;
    timestamp: Date
}

function add(num1:NumOrStr, num2:NumOrStr){  // union types
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1+num2
    }else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 + " " + num2
    }
    return +num1 + +num2
    
}

function printResult(resultObj:Result){  // using of objects in typescript
    console.log(resultObj.val)
}

buttonElement.addEventListener('click',()=>{
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1,+num2) // if we omit + ,it will treated num1 and num2 as strings 
    numResult.push(result as number)
    const stringResult = add(num1,num2)
    strResult.push(stringResult as string)
    console.log(result)
    console.log(stringResult)
    printResult({val:result as number , timestamp: new Date()})
    console.log(numResult,strResult)
})

const myPromise = new Promise<string>((resolve,reject) => {
    setTimeout(() => {
        resolve('It workedd')
    })
})

myPromise.then((result) => {
    console.log(result.split('w'))
})
