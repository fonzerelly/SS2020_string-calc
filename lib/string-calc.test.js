const { stringCalc } = require('./string-calc')
describe('StringCalc', () => {
    describe('valid cases', () => {
        [
            { input: '', output: 0 },
            { input: '1', output: 1 },
            { input: '1,2', output: 3 },
            { input: '1,2,3,4', output: 10 },
            { input: '1\n2,3', output: 6 },
            { input: '//;\n1;2', output: 3 },
        ].forEach(({input, output}) => {
            it(`should return ${output} on "${input}"`, () => {
                expect(stringCalc(input)).toEqual(output)
            });
        });
    });
    describe('invalid cases',() => {
        [
            {input: '1, -2'}
        ].forEach(({input}) => {
            it(`should throw on "${input}"`, () => {
                expect(() => { stringCalc(input) }).toThrow();
            })
        })
    })
});