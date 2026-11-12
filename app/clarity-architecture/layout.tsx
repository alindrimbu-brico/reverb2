import DemoScope from "@/components/DemoScope";

// Machetele din acest dosar își păstrează forma (capsule, fără ridicarea butoanelor): vezi components/DemoScope.tsx.
export default function Layout({ children }: { children: React.ReactNode }) {
  return <DemoScope fixed>{children}</DemoScope>;
}
