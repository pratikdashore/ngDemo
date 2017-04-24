export class Customer {
    name: string;
    id: number;
    address: Address;
}

export class Address {
    street: string;
    city: string;
    region: string;
}


export const Customers: Customer[] = [{
    id: 1,
    name: 'Pratik',
    address: {
        city: 'Indore',
        region: 'East',
        street: 'Ring Road'
    }
}, {
    id: 2,
    name: 'Rahul',
    address: {
        city: 'Jaipur',
        region: 'West',
        street: 'Circle Road'
    }
}, {
    id: 3,
    name: 'Mayur',
    address: {
        city: 'Bhopal',
        region: 'North',
        street: 'MG Road'
    }
}, {
    id: 1,
    name: 'Ramendra',
    address: {
        city: 'Indore',
        region: 'East',
        street: 'Airport Road'
    }
}];
