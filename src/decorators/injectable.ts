import "reflect-metadata";

type GenericClassDecorator<T> = (target: any) => void;

// Simple Injectable decorator.
export const Injectable = (): GenericClassDecorator<any> => {
  return (target: any) => {
    // console.log( 
    //   '[Injectable]',
    //   target.name,
    //   Reflect.getMetadata('design:paramtypes', target)
    // );
  };
};