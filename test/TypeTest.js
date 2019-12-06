const TypedMethodClass = App.TypedMethodClass;
const { expect } = require('chai');

describe('Type', function () {
    it ('should define parameter metadata', () => {
        new ReflectionClass(TypedMethodClass);

        expect(MetadataStorage.getMetadata(TypedMethodClass.prototype.getAction, 0)).to.dumpsAs(
`array:1 [
  0 => array:2 [
    0 => "Symbol(Type)",
    1 => "FooType"
  ]
]`
        );

        expect(MetadataStorage.getMetadata(TypedMethodClass.prototype.getAction, 1)).to.dumpsAs(
`array:1 [
  0 => array:2 [
    0 => "Symbol(Type)",
    1 => Function {
      name: "Object"
      function: "function Object() { [native code] }"
    }
  ]
]`
        );
    });
});
