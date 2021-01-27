import { capitalize } from '../src';

describe('capitalize() tests', function () {
    test('valid capitalization when lowercase', () => {
        expect(capitalize('test')).toEqual('Test');
    });
    test('valid capitalization when upper and lower case', () => {
        expect(capitalize('tESt')).toEqual('Test');
    });
});
