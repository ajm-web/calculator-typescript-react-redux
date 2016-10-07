
export interface Operation {
    name: string;
    operator: string;
    operation: (left: number, right: number) => number;
}

const ADD = {
    name: "add",
    operator: "+",
    operation: (left: number, right: number) => left + right
};
const SUB = {
    name: "sub",
    operator: "-",
    operation: (left: number, right: number) => left - right
};
const MULTIPLY = {
    name: "multiply",
    operator: "*",
    operation: (left: number, right: number) => left * right
};
const DIVIDE = {
    name: "divide",
    operator: "/",
    operation: (left: number, right: number) => left / right
};

export const operations: Operation[] = [ADD, SUB, MULTIPLY, DIVIDE];
