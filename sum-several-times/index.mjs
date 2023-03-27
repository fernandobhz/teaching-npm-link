import { sum } from 'original-plus-minus';


export const mul = (number, xTimes)  => {
    let ret = 0;

    for (let index = 0; index <= xTimes; index++) {
        ret += sum(ret, number);
    }

    console.log(' sssssssssssssssxxxxxxxxxxxxxxxxxxxxxx ')
    return ret;
}

