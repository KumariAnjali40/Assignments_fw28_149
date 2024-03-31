// Interface for an object
interface MyObject {
    title: string;
    status: boolean;
    id: number;
  }
  
  // Function to get full name
  function getName(obj: { firstname: string; lastname?: string }): string {
    if (obj.lastname) {
      return `${obj.firstname} ${obj.lastname}`;
    } else {
      return obj.firstname;
    }
  }
  
  // Interface for Address
  interface Address {
    houseNumber: number;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }
  
  // Interface for PersonDetails
  interface PersonDetails {
    Prefix?: string;
    phones: number[];
    addresses: Address[];
    email?: string;
    firstname: string;
    lastname: string;
    middlename?: string;
  }
  
  // Function for PhoneBook
  function PhoneBook(details: PersonDetails): void {
    // Your logic here
    // For example, you can push the details into an array
    phoneBookArray.push(details);
  }
  
  // Array to store PersonDetails objects
  const phoneBookArray: PersonDetails[] = [];
  
  // Example usage
  const person1: PersonDetails = {
    firstname: 'John',
    lastname: 'Doe',
    phones: [1234567890],
    addresses: [
      {
        houseNumber: 123,
        street: 'Main St',
        city: 'Cityville',
        state: 'CA',
        postalCode: '12345',
        country: 'USA',
      },
    ],
  };
  
  // Adding person1 to the phone book
  PhoneBook(person1);
  
  // You can add more PersonDetails objects similarly
  