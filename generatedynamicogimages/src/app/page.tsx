import Link from "next/link";
import styles from "./page.module.css";
import { getAllUsers } from "@/lib/userFunctions";

export default async function Home() {
  let allUsers = await getAllUsers();
  return (
    <div>
      <ul>
        {allUsers.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
