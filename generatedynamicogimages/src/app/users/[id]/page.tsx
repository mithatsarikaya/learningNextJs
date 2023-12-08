import { getUserByID } from "@/lib/userFunctions";

const UserPage = async ({ params }: { params: { id: string } }) => {
  let userIDFromUrl = params.id;
  let user = await getUserByID(userIDFromUrl);
  return <div style={{ fontSize: "xxx-large" }}>{user.name}</div>;
};

export default UserPage;
