import AnimatedHero from "./components/AnimatedHero";
import CookieBanner from "./components/CookieBanner";
import RemoteFooter from "./components/RemoteFooter";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getTemplateImages } from "./lib/image-utils";

export const dynamic = "force-dynamic";

export default async function Home() {
  const templates = await getTemplateImages();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <AnimatedHero />

        <section id="gallery" className="mt-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-primary">Template Gallery</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">เลือกตัวอย่างเทมเพลต</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-400">
              คลิกการ์ดเพื่อไปยังหน้ารายละเอียดของเทมเพลตนั้น และดูลิงก์ชำระเงิน, ตัวอย่าง Vercel, และรีโป GitHub.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {templates.map((template) => (
              <Link
                key={template.slug}
                href={`/template/${template.slug}`}
                className="group overflow-hidden rounded-4xl border border-border bg-surface transition hover:-translate-y-1 hover:border-primary/40 hover:bg-surface-muted"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-slate-950">
                  <img
                    src={template.imageSrc}
                    alt={template.title}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.32em] text-primary">
                    <span>Template</span>
                    <span className="rounded-full border border-primary/20 px-2 py-1 text-[11px] uppercase text-primary">ราคา 5,000 บาท</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{template.title}</h3>
                  <p className="text-sm leading-6 text-slate-400">{template.description}</p>
                  <div className="flex items-center justify-between text-sm font-semibold text-primary">
                    <span>ดูรายละเอียด</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <RemoteFooter />
      <CookieBanner />
    </main>
  );
}
