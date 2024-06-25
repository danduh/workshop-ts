import { timer } from "./decorators/timer";

export class MyClass{
    @timer()
    primeMethodRecurcion(n: number){
        const isPrime =(num: number) => {
            for (let i = 2, sqrtNum = Math.sqrt(num); i <= sqrtNum; i++) {
              if (num % i === 0) return false;
            }
            return num > 1;
          }
        
          let primeCount = 0;
          for (let i = 2; i <= n; i++) {
            if (isPrime(i)) primeCount++;
          }
          return primeCount;        
    }

    @timer()
    primeMethodLoop(num: number) {
        const res = [];
        for (let i = 2; i <= num; i++) {
          let flag = 0;
          for (let j = 2; j < i; j++) {
            if (i % j == 0) {
              flag = 1;
              break;
            }
          }
    
          if (i > 1 && flag == 0) {
            res.push(i);
          }
        }
        return res.length;
      }
}

const myCl = new MyClass()

console.log(myCl.primeMethodRecurcion(100000))
console.log(myCl.primeMethodLoop(100000))