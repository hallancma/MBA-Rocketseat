type Tuser = {
  name: string;
  email: string;
  age: number;
};

type TPayment = {
  method: string;
};

interface IPayment {
  method: string;
}

type TAccount = Tuser & TPayment;

interface IUser {
  name: string;
  email: string;
  age: number;
}

interface IAccount extends IUser, IPayment {}
