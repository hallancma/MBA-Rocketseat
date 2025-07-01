const user = {
  name: "Hallan",
  message: function () {
    console.log(`Olá ${this.name}`);
  }
}

user.message();