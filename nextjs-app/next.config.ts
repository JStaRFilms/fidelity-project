import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // pnpm stores Next.js in the workspace root. Tell Turbopack about that
    // root when this app is built from either nextjs-app/ or repo-level proxy
    // scripts, while keeping the actual app source in nextjs-app/.
    root: path.resolve(process.cwd(), ".."),
  },
};

export default nextConfig;
