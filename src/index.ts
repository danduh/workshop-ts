const log = console.log;

let apt = {
    floor: 12,
    number: '12B',
    size: 3400,
    bedRooms: 3.4,
    bathRooms: 2,
    Price: 400000,
    amenities: {
        airCon: 4,
    }
};


const descriptor = Object.getOwnPropertyDescriptor(apt, 'floor')


log(descriptor)
log(apt.floor)