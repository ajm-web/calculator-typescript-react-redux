import {createInstance} from "./NumberInputStore";

const i = createInstance();

export const instance = i;

instance.subscribe(() => {
    console.log("Left Value : ", instance.getState());
});
