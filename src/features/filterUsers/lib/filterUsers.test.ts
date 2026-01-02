import { filterUsers } from "./filterUsers";

const users = [
  { id: 1, name: "Alice", username: "alice", email: "alice@email.com" },
  { id: 2, name: "Bob", username: "bob", email: "bob@email.com" },
  { id: 3, name: "Carol", username: "carol", email: "carol@email.com" },
];

describe("filterUsers", () => {
  it("devuelve todos los usuarios si la búsqueda está vacía", () => {
    const result = filterUsers(users, "   ");

    expect(result).toEqual(users);
  });

  it("filtra por nombre, username o email sin diferenciar mayúsculas", () => {
    expect(filterUsers(users, "ali")).toEqual([users[0]]);
    expect(filterUsers(users, "BOB")).toEqual([users[1]]);
    expect(filterUsers(users, "CAROL@EMAIL")).toEqual([users[2]]);
  });

  it("devuelve lista vacía cuando no hay coincidencias", () => {
    expect(filterUsers(users, "zzz")).toEqual([]);
  });
});
