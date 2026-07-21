import NeuroRecoveryDashboardShared from "../../../../showcase/neuro-recovery/components/NeuroRecoveryDashboardShared";
import NeuroRecoveryArticleShared from "../../../../showcase/neuro-recovery/components/NeuroRecoveryArticleShared";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export async function generateStaticParams() {
  return [
    { slug: [] },
    { slug: ["roots"] },
    { slug: ["collective-trauma-hpa"] },
    { slug: ["epigenetics-gabor-mate"] },
    { slug: ["pleasure"] },
    { slug: ["happiness"] },
    { slug: ["joy-soul"] },
    { slug: ["ecstasy"] },
    { slug: ["human-connection"] },
    { slug: ["medical-shield"] },
    { slug: ["neuroplasticity"] },
    { slug: ["brain-balance"] },
    { slug: ["substances", "alcohol"] },
    { slug: ["substances", "cannabis"] },
    { slug: ["substances", "stimulants"] }
  ];
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  
  if (!slug || slug.length === 0) {
    return <NeuroRecoveryDashboardShared />;
  }

  const key = slug[0] === "substances" ? slug[1] : slug[0];
  
  const validKeys = [
    "roots", "collective-trauma-hpa", "epigenetics-gabor-mate", 
    "pleasure", "happiness", "joy-soul", "ecstasy", "human-connection", 
    "medical-shield", "neuroplasticity", "brain-balance", "alcohol", "cannabis", "stimulants"
  ];

  if (!key || !validKeys.includes(key)) {
    notFound();
  }

  return <NeuroRecoveryArticleShared slug={key} />;
}
