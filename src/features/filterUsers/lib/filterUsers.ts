import { User } from "../../../entities/user";

export function filterUsers(users: User[], search: string) {
  const line = search.trim().toLowerCase();
  if (!line) return users;

  return users.filter((user) => {
    const name = user.name.toLowerCase();
    const username = user.username.toLowerCase();
    const email = user.email.toLowerCase();

    return (
      name.includes(line) || username.includes(line) || email.includes(line)
    );
  });
}
