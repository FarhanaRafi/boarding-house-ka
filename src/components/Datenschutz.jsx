import { useLanguage } from "../i18n";

export default function Datenschutz({ onClose }) {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8 flex items-start justify-center">
        <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-8 relative">
          {/* Header */}
          <div className="sticky top-0 bg-white rounded-t-2xl border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {t.legal?.datenschutzTitle || "Datenschutzerklärung (DSGVO)"}
            </h1>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-8 prose prose-gray max-w-none">
            <p className="text-gray-500 italic mb-6">
              (aktualisiert für Hosting bei STRATO AG)
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              1. Verantwortlicher
            </h2>
            <p className="text-gray-700 mb-6">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              <br />
              <br />
              Varsha Lavin &amp; Lavin Pottekkat
              <br />
              Jöhlinger Str 9/4
              <br />
              75045 Walzbachtal
              <br />
              Deutschland
              <br />
              <br />
              E-Mail:{" "}
              <a
                href="mailto:info@boardinghauskarlsruhe.de"
                className="text-orange-600 hover:text-orange-700"
              >
                info@boardinghauskarlsruhe.de
              </a>
              <br />
              Telefon:{" "}
              <a
                href="tel:+4915738754711"
                className="text-orange-600 hover:text-orange-700"
              >
                +49 1573 8754711
              </a>
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              2. Erhebung und Speicherung personenbezogener Daten sowie Art und
              Zweck ihrer Verwendung
            </h2>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              a) Beim Besuch der Website
            </h3>
            <p className="text-gray-700 mb-4">
              Beim Aufruf unserer Website werden automatisch Informationen durch
              den Webserver des Providers gespeichert. Diese sogenannten
              Server-Logfiles beinhalten:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse (anonymisiert)</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Die Erfassung dient zur Sicherstellung der Funktionsfähigkeit,
              Sicherheit und Optimierung der Website.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Hosting-Provider:</strong>
              <br />
              STRATO AG
              <br />
              Otto-Ostrowski-Straße 7<br />
              10249 Berlin, Deutschland
            </p>
            <p className="text-gray-700 mb-6">
              Strato speichert anonymisierte IP-Adressen zur Sicherheit maximal
              7 Tage (Stand: Strato DSGVO-Richtlinie).
              <br />
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an sicherem Betrieb).
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              b) Kontaktaufnahme per E-Mail
            </h3>
            <p className="text-gray-700 mb-4">
              Wenn Sie uns per E-Mail kontaktieren, werden folgende Daten
              verarbeitet:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Ihre E-Mail-Adresse</li>
              <li>Ihr Name (falls angegeben)</li>
              <li>Der Inhalt der Nachricht</li>
            </ul>
            <p className="text-gray-700 mb-6">
              <strong>Zweck:</strong> Bearbeitung Ihrer Anfrage
              <br />
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b oder lit. f
              DSGVO
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              3. Cookies
            </h2>
            <p className="text-gray-700 mb-6">
              Unsere Website setzt keine Tracking- oder Marketing-Cookies ein.
              Strato kann technisch notwendige Cookies zur Bereitstellung der
              Seite setzen. Diese sind datenschutzrechtlich unproblematisch.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              4. Weitergabe von Daten
            </h2>
            <p className="text-gray-700 mb-4">Eine Weitergabe erfolgt nur:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>wenn gesetzlich vorgeschrieben</li>
              <li>zur Vertragserfüllung</li>
              <li>an den Hosting-Anbieter (STRATO)</li>
              <li>wenn Sie eingewilligt haben</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Es findet keine Weitergabe zu Werbezwecken statt.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              5. Datenverarbeitung im Rahmen des Wohnheim-Mietvertrags
            </h2>
            <p className="text-gray-700 mb-4">
              Für Mietzwecke verarbeiten wir folgende Daten:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Name</li>
              <li>Adresse</li>
              <li>Geburtsdatum</li>
              <li>Kontaktdaten</li>
              <li>Zahlungsdetails (IBAN etc.)</li>
              <li>Meldebescheinigung</li>
              <li>Ggf. Bonitätsauskünfte</li>
            </ul>
            <p className="text-gray-700 mb-6">
              <strong>Zweck:</strong> Abschluss und Durchführung des
              Mietvertrages.
              <br />
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              6. Speicherdauer
            </h2>
            <p className="text-gray-700 mb-4">Wir speichern Daten:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>für die Vertragsdauer</li>
              <li>gemäß gesetzlicher Aufbewahrungsfristen (6-10 Jahre)</li>
              <li>bis zur Erfüllung aller Ansprüche</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Danach werden die Daten gelöscht oder anonymisiert.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              7. Ihre Rechte
            </h2>
            <p className="text-gray-700 mb-4">Sie haben folgende Rechte:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Auskunftsrecht (Art. 15 DSGVO)</li>
              <li>Berichtigung (Art. 16 DSGVO)</li>
              <li>Löschung (Art. 17 DSGVO)</li>
              <li>Einschränkung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
              <li>Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Kontakt:{" "}
              <a
                href="mailto:info@boardinghauskarlsruhe.de"
                className="text-orange-600 hover:text-orange-700"
              >
                info@boardinghauskarlsruhe.de
              </a>
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              8. Beschwerderecht
            </h2>
            <p className="text-gray-700 mb-6">
              Zuständig ist die Datenschutz-Aufsichtsbehörde:
              <br />
              Der Landesbeauftragte für den Datenschutz und die
              Informationsfreiheit Baden-Württemberg (LfDI BW)
              <br />
              <a
                href="https://www.baden-wuerttemberg.datenschutz.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700"
              >
                https://www.baden-wuerttemberg.datenschutz.de
              </a>
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              9. Datensicherheit
            </h2>
            <p className="text-gray-700 mb-6">
              Wir setzen technische und organisatorische Maßnahmen um, um
              personenbezogene Daten vor Verlust, Zerstörung, unbefugtem Zugriff
              und Manipulation zu schützen.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              10. Änderungen
            </h2>
            <p className="text-gray-700 mb-6">
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf
              anzupassen.
              <br />
              Die aktuellste Version finden Sie auf dieser Website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
