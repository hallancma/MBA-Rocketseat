type Point = {
  x: number;
  y: number;
};

type User = {
  name: string;
  email: string;
  age: number;
  isAdmin: boolean; // Optional property
};

function printCoord(points: Point) {
  console.log(`X: ${points.x}, Y: ${points.y}`);
}

let user01: User = {
  name: "Hallan",
  email: "hallan@email.com",
  age: 30,
  isAdmin: true,
};
console.log(user01);

printCoord({ x: 10, y: 20 });
