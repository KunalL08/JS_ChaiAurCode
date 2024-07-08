// Old JS and react had very much dependency over the call and bind
// below is the example for call usage

function setUsername(username){
    this.username = username; 
}

function createUser(username, email, password){
    setUsername(username);
    
    this.email = email;
    this.password = password;
}

const chai = new createUser('chai', 'chai@email.com', 'Abc123');        // Output : createUser { email: 'chai@email.com', password: 'Abc123' }
console.log(chai);

function createUser2(username, email, password){
    setUsername.call(this, username);

    this.email = email;
    this.password= password;
}

const chai1 = new createUser2('chai1', 'chai1@email.com', 'Zyx987');
console.log(chai1);         // Output : createUser2 {
                                        //     username: 'chai1',
                                        //     email: 'chai1@email.com',
                                        //     password: 'Zyx987'
                                        // }

