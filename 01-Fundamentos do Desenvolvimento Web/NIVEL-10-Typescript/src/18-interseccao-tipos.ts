type Profile = {
  id: number;
  nome: string;
};

type Char = {
  nickname: string;
  level: number;
};

type Player = Profile & Char;
let player: Player = {
  id: 1,
  nome: "Hallan",
  nickname: "hallancristian",
  level: 10,
};
console.log(player);
