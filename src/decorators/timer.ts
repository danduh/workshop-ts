export const timer = (log?: (...args: any) => void): MethodDecorator => {
    return (target, key, descriptor: TypedPropertyDescriptor<any>) => {
      const origin = descriptor.value;
  
      descriptor.value = (...args: any) => {
        const t1 = new Date().getTime();
        
        const results = origin.apply(this, args);
        
        const t2 = new Date().getTime();
        const msg = `Time execution for method ${key.toString()} is ${t2 - t1}ms`;
        if (typeof log === 'function') {
          log(msg);
        } else {
          console.log(msg);
        }
        return results;
      };
    };
  };
  