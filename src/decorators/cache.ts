export const cache = () => {
    const map: any = {};
    return (target: any, key: string, descriptor: TypedPropertyDescriptor<any>) => {
        const origin = descriptor.value;
        if(!map.hasOwnProperty(key)){
            map[key] = {};
        }
        
        descriptor.value = (...args:any)=>{
            if(!map[key].hasOwnProperty(args.toString())){
                map[key][args.toString()] = undefined;
            } else {
                return map[key][args.toString()];
            }
                        
            const result = origin.apply(this, args);
            map[key][args.toString()] = result;

            console.log(map);

            return map[key][args.toString()];
        }
    }
}