"use client";
import { useEffect, useState } from "react";

interface Track {
  name?: string;
  preview_url?: string;
  external_urls?: { spotify: string };
  artists?: { name: string }[];
  album?: { images?: { url: string }[]; name?: string };
}

export default function SpotifyPlayer({ trackId }: { trackId: string }) {
  const [track, setTrack] = useState<Track | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const res = await fetch(`/api/spotify/track/${trackId}`);
        const data = await res.json();
        setTrack(data);
      } catch (err) {
        console.error("Error fetching track:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTrack();
  }, [trackId]);

  if (loading) return <p className="text-gray-500">Loading track...</p>;
  if (!track) return <p className="text-gray-500">No track found</p>;

  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
      <img
        src={track.album?.images?.[0]?.url || "https://via.placeholder.com/80"}
        alt={track.name || "Unknown"}
        className="w-16 h-16 rounded"
      />
      <div className="flex-1">
        <h2 className="font-bold text-lg">{track.name || "Untitled"}</h2>
        <p className="text-sm text-gray-600">
          {track.artists?.map((a) => a.name).join(", ") || "Unknown Artist"}
        </p>

        {track.preview_url ? (
          <audio controls className="w-full mt-2">
            <source src={track.preview_url} type="audio/mpeg" />
          </audio>
        ) : (
          <p className="text-xs text-red-500 mt-2">No preview available</p>
        )}
      </div>
    </div>
  );
}
