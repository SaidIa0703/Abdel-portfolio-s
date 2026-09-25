import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="wrap footer">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <span>Next.js · NGINX · Docker</span>
    </footer>
  );
}
