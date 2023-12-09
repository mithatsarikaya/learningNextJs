import { ImageResponse } from "next/og";
import { getUserByID } from "@/lib/userFunctions";
export const runtime = "edge";

export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

//topush

export default async function Image({ params }: { params: { id: string } }) {
  const user = await getUserByID(params.id);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {user.phone}
      </div>
    ),
    {
      ...size,
    }
  );
}
