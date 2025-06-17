class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  senMail() {
    console.log(`E-mail enviado para ${this.name}, usando o e-mail ${this.email}`);
  }

}

const user = new User("Hallan Christian", "hallancma@gmai.com");
user.senMail();

