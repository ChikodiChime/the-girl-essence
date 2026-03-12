import { notFound } from "next/navigation";
import { programs, getProgramBySlug } from "@/lib/programs";
import type { Metadata } from "next";
import ProgramDetailClient from "./ProgramDetailClient";
import { ROUTES } from "@/config/routes";

export async function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return { title: "Program Not Found | The Girl Essence" };
  return {
    title: `${program.title} | The Girl Essence`,
    description: program.description,
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  return (
    <ProgramDetailClient
      program={program}
      whatsappHref={ROUTES.external.whatsapp()}
      instagramUrl={ROUTES.external.instagram}
    />
  );
}
