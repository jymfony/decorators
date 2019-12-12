import { @Type } from "../src";

export default class TypedPrivateMethodClass {
    #getAction(
        @Type('FooType') param1,
        @Type(Object) param2,
        param3
    ) {
    }
}
