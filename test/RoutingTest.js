const RoutableClass = App.RoutableClass;
const { expect } = require('chai');

describe('Route', function () {
    it ('should add metadata', () => {
        const reflClass = new ReflectionClass(RoutableClass);
        expect(reflClass.metadata[0]).to.have.length(2);
        expect(reflClass.metadata[0][1]).to.dumpsAsFormat(`array:2 [
  0 => Route {
    +"_path": "/foobar"
    +"_name": undefined
    +"_requirements": undefined
    +"_options": undefined
    +"_defaults": undefined
    +"_host": undefined
    +"_methods": undefined
    +"_schemes": undefined
    +"_condition": undefined
  },
  1 => Route {
    +"_path": "/barbar"
    +"_name": undefined
    +"_requirements": undefined
    +"_options": undefined
    +"_defaults": undefined
    +"_host": undefined
    +"_methods": undefined
    +"_schemes": undefined
    +"_condition": undefined
  }
]`);
    });

    it ('should add @Get metadata correctly', () => {
        const reflClass = new ReflectionClass(RoutableClass);
        const method = reflClass.getMethod('getAction');
        expect(method.metadata).to.have.length(1);
        expect(method.metadata[0][1]).to.dumpsAsFormat(`Route {
  +"_path": "/get"
%A
  +"_methods": array:1 [
    0 => "GET"
  ]
%A
}`);
    });

    it ('should add @Post metadata correctly', () => {
        const reflClass = new ReflectionClass(RoutableClass);
        const method = reflClass.getMethod('postAction');
        expect(method.metadata).to.have.length(1);
        expect(method.metadata[0][1]).to.dumpsAsFormat(`Route {
  +"_path": "/post"
%A
  +"_methods": array:1 [
    0 => "POST"
  ]
%A
}`);
    });

    it ('should add @Put metadata correctly', () => {
        const reflClass = new ReflectionClass(RoutableClass);
        const method = reflClass.getMethod('putAction');
        expect(method.metadata).to.have.length(1);
        expect(method.metadata[0][1]).to.dumpsAsFormat(`Route {
  +"_path": "/put"
%A
  +"_methods": array:1 [
    0 => "PUT"
  ]
%A
}`);
    });

    it ('should add @Delete metadata correctly', () => {
        const reflClass = new ReflectionClass(RoutableClass);
        const method = reflClass.getMethod('deleteAction');
        expect(method.metadata).to.have.length(1);
        expect(method.metadata[0][1]).to.dumpsAsFormat(`Route {
  +"_path": "/delete"
%A
  +"_methods": array:1 [
    0 => "DELETE"
  ]
%A
}`);
    });

    it ('should add @Patch metadata correctly', () => {
        const reflClass = new ReflectionClass(RoutableClass);
        const method = reflClass.getMethod('patchAction');
        expect(method.metadata).to.have.length(1);
        expect(method.metadata[0][1]).to.dumpsAsFormat(`Route {
  +"_path": "/patch"
%A
  +"_methods": array:1 [
    0 => "PATCH"
  ]
%A
}`);
    });

    it ('should add @Route metadata correctly on method', () => {
        const reflClass = new ReflectionClass(RoutableClass);
        const method = reflClass.getMethod('customAction');
        expect(method.metadata).to.have.length(1);
        expect(method.metadata[0][1]).to.dumpsAsFormat(`Route {
  +"_path": "/method"
%A
  +"_methods": array:1 [
    0 => "CUSTOM"
  ]
%A
}`);
    });
});
