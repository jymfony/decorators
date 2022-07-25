import { Delete, Get, Patch, Post, Put, Route } from '../src';

@Route({ path: '/foobar' })
@Route('/barbar')
export default class RoutableClass {
    @Get('/get')
    getAction() {}

    @Post('/post')
    postAction() {}

    @Delete({ path: '/delete' })
    deleteAction() {}

    @Put({ path: '/put' })
    putAction() {}

    @Patch('/patch')
    patchAction() {}

    @Route({ path: '/method', methods: [ 'CUSTOM' ] })
    customAction() {}
}
