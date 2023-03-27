import { sum, sub } from "original-plus-minus";
import { mul } from "original-sum-several-times";

const { log } = console;

log(2, 'plus', 3, 'equals', sum(2,3));
log(2, 'minus', 3, 'equals', sub(2,3));
log(2, 'mul', 1200, 'equals', mul(2,3));


