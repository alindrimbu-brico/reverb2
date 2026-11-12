import type { ReactNode } from "react";
import HumanoidFrame from "@/components/humanoid/HumanoidFrame";

// Un singur cadru pentru raport și pentru cele patru capitole: aceeași limbă, aceeași mecanică, același fundal.
// Metadata rămâne în page.tsx (pagina principală) și în layout.tsx al fiecărui capitol.
export default function HumanoidLayout({ children }: { children: ReactNode }) {
  return <HumanoidFrame>{children}</HumanoidFrame>;
}
