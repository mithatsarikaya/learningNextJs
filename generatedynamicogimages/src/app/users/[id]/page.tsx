import { getUserByID } from "@/lib/userFunctions";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json());
  let user = await getUserByID(id);

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: user.email,
    description: user.company.bs,

    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
  };
}

const UserPage = async ({ params }: { params: { id: string } }) => {
  let userIDFromUrl = params.id;
  let user = await getUserByID(userIDFromUrl);
  return <div style={{ fontSize: "xxx-large" }}>{user.name}</div>;
};

export default UserPage;
