import "reflect-metadata";

// Assuming we define these types (or import them if they're defined in your framework/environment).
type Type<T> = { new(...args: any[]): T };
type GenericClassDecorator<T> = (target: Type<T>) => void;

// Simple Injectable decorator.
export const Injectable = (): GenericClassDecorator<Type<object>> => {
  return (target: Type<object>) => {
    // console.log( 
    //   '[Injectable]',
    //   target.name,
    //   Reflect.getMetadata('design:paramtypes', target)
    // );
  };
};