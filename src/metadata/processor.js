import { Annotation, ANNOTATION_TARGET_CLASS } from "../annotation";

@Annotation(ANNOTATION_TARGET_CLASS)
export class Processor {
    constructor() {
        throw new Error('Cannot be constructed');
    }
}
