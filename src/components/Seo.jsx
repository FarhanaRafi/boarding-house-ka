import { useEffect, useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useLanguage } from "../i18n";

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => {
    el.setAttribute(k, v);
  });
}

function upsertLink(rel, attrs) {
  let el = document.head.querySelector(`link[rel="${rel}"]${attrs.hreflang ? `[hreflang="${attrs.hreflang}"]` : ""}`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    if (attrs.hreflang) el.setAttribute("hreflang", attrs.hreflang);
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === "hreflang") return;
    el.setAttribute(k, v);
  });
}

function pageMeta({ lang, pathname }) {
  const isDe = lang === "de";

  const baseTitle = isDe
    ? "Möblierte Apartments Karlsruhe | Boardinghouse & WG Alternative | boardinghauskarlsruhe.de"
    : "Furnished Apartments Karlsruhe | Boarding House & Flat-share Alternative | boardinghauskarlsruhe.de";

  const baseDescription = isDe
    ? "Möblierte Apartments & Zimmer in Karlsruhe-Neureut ab 650€/Monat All-Inclusive. WLAN, Reinigung inklusive. Langzeitmiete ab 6 Monaten."
    : "Furnished apartments & rooms in Karlsruhe-Neureut from €650/month all-inclusive. WiFi and cleaning included. Long-term stays from 6 months.";

  const route = pathname.replace(`/${lang}`, "") || "/";

  const pages = {
    "/": {
      title: baseTitle,
      description: baseDescription,
    },
    "/ueber-uns": {
      title: isDe ? `Über uns | boardinghauskarlsruhe.de` : `About us | boardinghauskarlsruhe.de`,
      description: isDe
        ? "Serviceorientiertes Boardinghouse in Karlsruhe-Neureut für Langzeitaufenthalte ab 6 Monaten."
        : "Service-focused boarding house in Karlsruhe-Neureut for long-term stays from 6 months.",
    },
    "/region": {
      title: isDe ? `Region Karlsruhe-Neureut | boardinghauskarlsruhe.de` : `Region Karlsruhe-Neureut | boardinghauskarlsruhe.de`,
      description: isDe
        ? "Ruhig und zentral in Karlsruhe-Neureut gelegen – mit sehr guter Verkehrsanbindung und Nahversorgung."
        : "Quiet yet central in Karlsruhe-Neureut – great transport connections and local amenities.",
    },
    "/service": {
      title: isDe ? `Service | boardinghauskarlsruhe.de` : `Services | boardinghauskarlsruhe.de`,
      description: isDe
        ? "WLAN, wöchentliche Reinigung, Gemeinschaftsräume und weitere Services für einen angenehmen Aufenthalt."
        : "WiFi, weekly cleaning, common areas and more services for a comfortable stay.",
    },
    "/preise": {
      title: isDe ? `Preise | boardinghauskarlsruhe.de` : `Pricing | boardinghauskarlsruhe.de`,
      description: isDe
        ? "Transparente Preise für möblierte Apartments in Karlsruhe-Neureut (ab 650€/Monat, All-Inclusive)."
        : "Transparent pricing for furnished apartments in Karlsruhe-Neureut (from €650/month, all-inclusive).",
    },
    "/bilder": {
      title: isDe ? `Bilder | boardinghauskarlsruhe.de` : `Gallery | boardinghauskarlsruhe.de`,
      description: isDe
        ? "Bildergalerie der Apartments und Gemeinschaftsbereiche in Karlsruhe-Neureut."
        : "Photo gallery of apartments and common areas in Karlsruhe-Neureut.",
    },
    "/anreise": {
      title: isDe ? `Anreise | boardinghauskarlsruhe.de` : `Directions | boardinghauskarlsruhe.de`,
      description: isDe
        ? "Adresse, Lage und Anfahrt zum Boardinghouse Karlsruhe-Neureut."
        : "Address, location and directions to the boarding house in Karlsruhe-Neureut.",
    },
    "/kontakt": {
      title: isDe ? `Kontakt | boardinghauskarlsruhe.de` : `Contact | boardinghauskarlsruhe.de`,
      description: isDe
        ? "Kontaktieren Sie uns telefonisch oder per E-Mail für Verfügbarkeit und Anfragen."
        : "Contact us by phone or email for availability and inquiries.",
    },
    "/impressum": {
      title: isDe ? `Impressum | boardinghauskarlsruhe.de` : `Legal Notice | boardinghauskarlsruhe.de`,
      description: isDe
        ? "Impressum und Anbieterkennzeichnung."
        : "Legal notice and provider information.",
    },
    "/datenschutz": {
      title: isDe ? `Datenschutz | boardinghauskarlsruhe.de` : `Privacy Policy | boardinghauskarlsruhe.de`,
      description: isDe
        ? "Datenschutzerklärung (DSGVO) für boardinghauskarlsruhe.de."
        : "Privacy policy (GDPR) for boardinghauskarlsruhe.de.",
    },
  };

  return pages[route] || pages["/"];
}

export default function Seo() {
  const { lang: rawLang } = useParams();
  const lang = rawLang === "en" ? "en" : "de";
  const location = useLocation();
  useLanguage();

  const meta = useMemo(
    () => pageMeta({ lang, pathname: location.pathname }),
    [lang, location.pathname]
  );

  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || window.location.origin;
    const canonicalPath =
      location.pathname.length > 1 && location.pathname.endsWith("/")
        ? location.pathname.slice(0, -1)
        : location.pathname;
    const canonicalUrl = `${siteUrl}${canonicalPath}`;

    document.title = meta.title;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: meta.description,
    });

    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: meta.title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: meta.description,
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });

    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: meta.title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: meta.description,
    });

    upsertLink("canonical", { href: canonicalUrl });

    const remainder = location.pathname.startsWith(`/${lang}`)
      ? location.pathname.slice(`/${lang}`.length)
      : location.pathname;

    const dePath = `${siteUrl}/de${remainder || ""}`;
    const enPath = `${siteUrl}/en${remainder || ""}`;
    const altDe = dePath.endsWith("/") && dePath.length > `${siteUrl}/de`.length + 1 ? dePath.slice(0, -1) : dePath;
    const altEn = enPath.endsWith("/") && enPath.length > `${siteUrl}/en`.length + 1 ? enPath.slice(0, -1) : enPath;
    const altDeNormalized = altDe === `${siteUrl}/de/` ? `${siteUrl}/de` : altDe;
    const altEnNormalized = altEn === `${siteUrl}/en/` ? `${siteUrl}/en` : altEn;

    upsertLink("alternate", { hreflang: "de", href: altDeNormalized });
    upsertLink("alternate", { hreflang: "en", href: altEnNormalized });
    upsertLink("alternate", { hreflang: "x-default", href: altDeNormalized });
  }, [lang, location.pathname, meta.title, meta.description]);

  return null;
}
