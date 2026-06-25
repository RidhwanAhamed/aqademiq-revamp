import { Header, Footer, PageLayout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { getSEOConfig } from "@/lib/seo-config";
import { Mail, MessageCircle, Building2, Globe } from "lucide-react";

export default function Support() {
  return (
    <PageLayout>
      <SEO {...getSEOConfig("/support")} />
      <Header />
      <main className="pt-28 pb-20">
        <section className="container-marketing">
          <h1 className="text-display-lg md:text-display-xl text-foreground mb-4">
            Aqademiq Support
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-3xl mb-8">
            This is the official support page for Aqademiq. Aqademiq is a product of R13 Labs India Private Limited.
            If you need help with the product, billing, enrollment verification, or account access, contact us using
            the channels below.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-display-sm text-foreground mb-4">Support Channels</h2>
              <ul className="space-y-4 text-body-md text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <span>
                    Email: <a href="mailto:tryaqademiq@gmail.com" className="text-primary hover:underline">tryaqademiq@gmail.com</a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>
                    WhatsApp: <a href="https://wa.me/971501292021" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">+971 50 129 2021</a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-primary mt-0.5" />
                  <span>
                    Website: <a href="https://aqademiq.com" className="text-primary hover:underline">https://aqademiq.com</a>
                  </span>
                </li>
              </ul>
            </article>

            <article className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-display-sm text-foreground mb-4">Company Information</h2>
              <ul className="space-y-4 text-body-md text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-primary mt-0.5" />
                  <span>Legal Entity: R13 Labs India Private Limited</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-primary mt-0.5" />
                  <span>Product: Aqademiq (AI study planner)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-primary mt-0.5" />
                  <span>Support URL: https://aqademiq.com/support</span>
                </li>
              </ul>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </PageLayout>
  );
}
