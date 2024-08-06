// Define the Constants object
var Constants = {
    // Add some constant properties
    PI: 3.14159,
    E: 2.71828,
    MAX_USERS: 1000,
    API_URL: 'https://api.example.com/v1/',
    
    // Nested objects for more structured constants
    COLORS: {
        RED: '#FF0000',
        GREEN: '#00FF00',
        BLUE: '#0000FF'
    },
    
    // Function as a property
    getMaxUsersMessage: function() {
        return `The maximum number of users is ${this.MAX_USERS}.`;
    }
};

// Accessing constants
console.log(Constants.PI); // Output: 3.14159
console.log(Constants.COLORS.RED); // Output: #FF0000
console.log(Constants.getMaxUsersMessage()); // Output: The maximum number of users is 1000.
