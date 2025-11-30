import { useLanguage } from "../i18n";

export default function Impressum({ onClose }) {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8 flex items-start justify-center">
        <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-8 relative">
          {/* Header */}
          <div className="sticky top-0 bg-white rounded-t-2xl border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {t.legal?.impressumTitle || "Impressum"}
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
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="text-gray-700 mb-6">
              Varsha Lavin &amp; Lavin Pottekkat
              <br />
              Jöhlinger Str 9/4
              <br />
              75045 Walzbachtal
              <br />
              Deutschland
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Kontakt
            </h2>
            <p className="text-gray-700 mb-6">
              Telefon:{" "}
              <a
                href="tel:+4915738754711"
                className="text-orange-600 hover:text-orange-700"
              >
                +49 1573 8754711
              </a>
              <br />
              E-Mail:{" "}
              <a
                href="mailto:info@boardinghauskarlsruhe.de"
                className="text-orange-600 hover:text-orange-700"
              >
                info@boardinghauskarlsruhe.de
              </a>
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Haftungsausschluss (Disclaimer)
            </h2>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Haftung für Inhalte
            </h3>
            <p className="text-gray-700 mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
              Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine
              diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Haftung für Links
            </h3>
            <p className="text-gray-700 mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Urheberrecht
            </h3>
            <p className="text-gray-700 mb-6">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
              Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              EU-Streitschlichtung
            </h2>
            <p className="text-gray-700 mb-6">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              .<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
              <br />
              <br />
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
