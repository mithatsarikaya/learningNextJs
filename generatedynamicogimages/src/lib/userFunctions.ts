import { User, Users } from "@/types/user";
export const getAllUsers = async (): Promise<Users> => {
  let allUsers = await fetch("https://jsonplaceholder.typicode.com/users");
  let allUsersJson = await allUsers.json();
  return allUsersJson;
};

export const getUserByID = async (id: string): Promise<User> => {
  let users = await getAllUsers();
  let user = users.find((user) => user.id.toString() == id);
  if (!user) throw new Error("no user found with this id: ");
  return user;
};
