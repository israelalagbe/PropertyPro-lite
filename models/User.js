class User {
  constructor(data) {
    this.email = data.email;
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.password = data.password;
  }
  comparePassword(password){
      return this.password=password;
  }
}
module.exports = User;
