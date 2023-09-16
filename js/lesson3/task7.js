/**
 *? Напиши клас Client який створює об'єкт
 *? з ​​властивостями login email
 *? Оголоси приватні властивості #login #email,
 *? доступ до яких зроби через геттер та сеттер login email
 */
// const client = new Client("mango", "mango@gmail.com");

class Client {
  #login;
  #email;

  constructor(email,login) {
      this.#email = email;
      this.#login = login;
  }

  get clientData() {
      return {email:this.#email,login:this.#login};
       
  }

    set clientData({newEmail,newLogin}) {
      
      this.#email = newEmail;
      this.#login = newLogin;
      
  }
}
const client = new Client("mango", "mango@gmail.com");
console.log(client.clientData)
console.log(client.clientData={ newLogin:"polly",newEmail: "polly@gmail.com"})
console.log(client.clientData)