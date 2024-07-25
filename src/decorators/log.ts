export const log: MethodDecorator = (
    target,
    key: string | symbol,
    descriptor: TypedPropertyDescriptor<any>
) => {
    console.log(key, '1 [@log] Compilation time');

    const origin = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`2 [@log] Method ${key.toString()} was fired`);
        console.log(`3 [@log] Arguments passed to ${key.toString()} => ${args}`);
        console.log(`4 [@log] starting execution of ${key.toString()} method`);
        const results = origin.apply(this, args);
        console.log('5 [@log] Results', results);

        console.log(`6 [@log] Method ${key.toString()} was completed`);

        return results;
    };
};
