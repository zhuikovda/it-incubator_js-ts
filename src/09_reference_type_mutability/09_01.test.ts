function increaseAge(u: UserType) {
  u.age = u.age + 1;
}

type UserType = {
  name: string;
  age: number;
  address: { title: string };
};

test("reference type test", () => {
  let user: UserType = {
    name: "dima",
    age: 38,
    address: {
      title: "Minak",
    },
  };

  increaseAge(user);

  expect(user.age).toBe(39);
});

test("array test", () => {
  let users = [
    { name: "dima", age: 38 },
    { name: "sveta", age: 37 },
  ];

  let admins = users;

  admins.push({ name: "Bandygan", age: 13 });

  expect(users[2]).toEqual({ name: "Bandygan", age: 13 });
});

test("value test", () => {
  let usersCount = 100;

  let adminsCount = usersCount;

  adminsCount = adminsCount + 1;

  expect(adminsCount).toBe(101);
  expect(usersCount).toBe(100);
});

test("reference type test", () => {
  const address = {
    title: "Minak"
  }
  
  let user: UserType = {
    name: "dima",
    age: 38,
    address: address
  };

  let user2: UserType = {
    name: "sveta",
    age: 38,
    address: address
  };

  const users =[user, user2, {name: "eva", age: 13, addres: address}]

  const admins = [user, user2]

  admins[0].name= "dmitry"

  expect(user.name).toBe('dmitry');
  expect(users[0].name).toBe('dmitry');
});
