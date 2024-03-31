interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
  }
  
  interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
  }
  
  // Union type of User and Admin
  type UserType = User | Admin;
  
  // Function to retrieve the type
  function getUserType(user: UserType): string {
    if (user.type === 'user') {
      return 'User';
    } else {
      return 'Admin';
    }
  }
  
  // Example usage:
  const user: UserType = {
    type: 'user',
    name: 'John Doe',
    age: 25,
    occupation: 'Developer',
  };
  
  const admin: UserType = {
    type: 'admin',
    name: 'Admin Name',
    age: 30,
    role: 'Administrator',
  };
  
  console.log(getUserType(user)); // Output: User
  console.log(getUserType(admin)); // Output: Admin
  