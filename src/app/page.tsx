// Redirect to [lang]/page.tsx
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/en");  // Default page 
}