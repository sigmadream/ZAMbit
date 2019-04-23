//% weight=100 color=#000000 icon="\uf06e" block="Zam:bit"
namespace zambit {
    /**
    * 유명한 피보나치 수를 계산합니다!
    */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }
}
