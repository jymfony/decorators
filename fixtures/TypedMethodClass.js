import { @Type } from "../src";

export default class TypedMethodClass {
    getAction(
        @Type('FooType') param1,
        @Type(Object) param2,
        param3
    ) {
    }
}
