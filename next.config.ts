import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ⬅️ Tambahkan ini
  },
  // Tambahkan opsi lain di sini jika perlu
};

export default nextConfig;
