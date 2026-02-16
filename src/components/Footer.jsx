import { Link, useParams } from "react-router-dom";
import { useLanguage } from "../i18n";

export default function Footer() {
  const { t } = useLanguage();
  const { lang } = useParams();
  const langPrefix = lang === "en" ? "en" : "de";

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm mb-4 sm:mb-0 text-center sm:text-left">
          &copy; 2025 boardinghauskarlsruhe.de. Alle Rechte vorbehalten.
        </p>
        <div className="flex items-center space-x-4 md:space-x-6">
          <a
            href="https://www.karlsruhe.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            karlsruhe.de
          </a>
          <a
            href="https://www.neureut.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            neureut.de
          </a>
          <div className="h-4 w-px bg-gray-600"></div>
          <Link
            to={`/${langPrefix}/impressum`}
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {t.legal?.impressumTitle || "Impressum"}
          </Link>
          <Link
            to={`/${langPrefix}/datenschutz`}
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {t.legal?.datenschutzTitle || "Datenschutz"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
