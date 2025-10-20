import { NextResponse } from "next/server";
import { getSpotifyToken } from "../../token/route";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { access_token } = await getSpotifyToken();

  const trackRes = await fetch(`https://api.spotify.com/v1/tracks/${params.id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const data = await trackRes.json();

  console.log("Spotify API response:", data); // cek hasilnya di terminal

  return NextResponse.json(data);
}
