const TypedMethodClass = App.TypedMethodClass;
const TypedPrivateMethodClass = App.TypedPrivateMethodClass;
const Util = App.Util;
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

    it ('should define parameter metadata for private methods', __jymfony.Platform.hasPrivateMethodsSupport() ? () => {
        const reflClass = new ReflectionClass(TypedPrivateMethodClass);

        expect(MetadataStorage.getMetadata(Util.getMetadataTarget(reflClass.getConstructor(), '#getAction'), 1)).to.dumpsAs(
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
    } : undefined);
});
