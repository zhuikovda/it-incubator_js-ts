export const usersArray = ["dima", "sveta", "eva"];

export const usersObj = {
  "0": "dima",
  "1": "sveta",
  "2": "eva",
};

type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
  "12": { id: 12, name: "dima" },
  "547": { id: 547, name: "sveta" },
  "273": { id: 273, name: "eva" },
};

let user = {id: 16465, name: 'zina'}

users[user.id]= user
// console.log(users);


// users[547]

export const usersArray1 = [
  { id: 12, name: "dima" },
  { id: 547, name: "sveta" },
  { id: 273, name: "eva" },
];
