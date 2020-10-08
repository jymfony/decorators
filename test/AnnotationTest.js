const TestClass = App.TestClass;
const { expect } = require('chai');

describe('Annotation', function () {
    it ('should define metadata', () => {
        const reflClass = new ReflectionClass(TestClass);
        expect(reflClass.metadata).to.have.length(1);
        expect(reflClass.metadata[0][1]).to.dump.as.format(`TestAnnotation {
  +"_value": "foobar"
}`);
    });
});
