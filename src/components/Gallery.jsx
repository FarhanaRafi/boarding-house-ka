import { useEffect, useState } from "react";
import { useLanguage } from "../i18n";

const getImageData = (t) => [
  {
    src: "/images/32162656.JPG",
    alt: t.gallery.img_32162656_alt,
    description: t.gallery.img_32162656_desc,
    showInGrid: true,
  },
  {
    src: "/images/32173466.JPG",
    alt: t.gallery.img_32173466_alt,
    description: t.gallery.img_32173466_desc,
    showInGrid: true,
  },
  {
    src: "/images/32173469.JPG",
    alt: t.gallery.img_32173469_alt,
    description: t.gallery.img_32173469_desc,
    showInGrid: true,
  },
  {
    src: "/images/32173834.JPG",
    alt: t.gallery.img_32173834_alt,
    description: t.gallery.img_32173834_desc,
    showInGrid: false,
  },
  {
    src: "/images/32162735.JPG",
    alt: t.gallery.img_32162735_alt,
    description: t.gallery.img_32162735_desc,
    showInGrid: false,
  },
  {
    src: "/images/32162754.JPG",
    alt: t.gallery.img_32162754_alt,
    description: t.gallery.img_32162754_desc,
    showInGrid: false,
  },
  {
    src: "/images/32162778.JPG",
    alt: t.gallery.img_32162778_alt,
    description: t.gallery.img_32162778_desc,
    showInGrid: false,
  },
  {
    src: "/images/32162786.JPG",
    alt: t.gallery.img_32162786_alt,
    description: t.gallery.img_32162786_desc,
    showInGrid: false,
  },
  {
    src: "/images/32162794.JPG",
    alt: t.gallery.img_32162794_alt,
    description: t.gallery.img_32162794_desc,
    showInGrid: false,
  },
  {
    src: "/images/32174044.JPG",
    alt: t.gallery.img_32174044_alt,
    description: t.gallery.img_32174044_desc,
    showInGrid: false,
  },
  {
    src: "/images/32162840.JPG",
    alt: t.gallery.img_32162840_alt,
    description: t.gallery.img_32162840_desc,
    showInGrid: false,
  },
  {
    src: "/images/32162845.JPG",
    alt: t.gallery.img_32162845_alt,
    description: t.gallery.img_32162845_desc,
    showInGrid: true,
  },
  {
    src: "/images/32174059.JPG",
    alt: t.gallery.img_32174059_alt,
    description: t.gallery.img_32174059_desc,
    showInGrid: false,
  },
];

export default function Gallery({ id }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const { t } = useLanguage();

  const allImages = getImageData(t);
  const gridImages = allImages.filter((img) => img.showInGrid);

  const asAvif = (src) => src.replace(/\.JPG$/i, ".avif");
  const asWebp = (src) => src.replace(/\.JPG$/i, ".webp");

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = allImages.findIndex(
      (img) => img.src === selectedImage.src
    );
    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % allImages.length;
    } else {
      newIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    }
    setSelectedImage(allImages[newIndex]);
  };

  return (
    <section
      id={id}
      className="pt-28 md:pt-32 pb-16 md:pb-20 bg-gray-900 overflow-hidden min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            {t.gallery.description}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {gridImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(image)}
              className="relative aspect-[4/3] overflow-hidden rounded-xl md:rounded-2xl group cursor-pointer"
            >
              <picture>
                <source srcSet={asAvif(image.src)} type="image/avif" />
                <source srcSet={asWebp(image.src)} type="image/webp" />
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 md:p-4">
                <span className="text-white font-medium text-xs sm:text-sm md:text-base line-clamp-2">
                  {image.alt}
                </span>
              </div>
              <div className="absolute top-2 right-2 md:top-3 md:right-3 w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Image and Description */}
          <div
            className="max-w-5xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <picture>
              <source srcSet={asAvif(selectedImage.src)} type="image/avif" />
              <source srcSet={asWebp(selectedImage.src)} type="image/webp" />
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                decoding="async"
                className="w-full max-h-[70vh] object-contain rounded-lg"
              />
            </picture>
            <div className="mt-4 text-center px-4">
              <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                {selectedImage.alt}
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
