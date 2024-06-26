

export default class UserModel{
    constructor(id , name , email , password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static addUser(name , email , password){

        const newUser = new UserModel(
            users.length+1 , 
            name , 
            email , 
            password)

        users.push(newUser);
        // console.log(users)

    }

    static isValidUser(email , password){
        const result = users.find((u)=> 
        u.email === email && u.password === password)
        
        return result
    }

}
var users = []