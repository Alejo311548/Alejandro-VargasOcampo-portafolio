interface PortfolioImageProps {
  src: string;
  alt: string;
}

export default function PortfolioImage({ src, alt }: PortfolioImageProps) {
  return (
    <div className="h-48 w-full bg-white rounded-t-xl overflow-hidden flex items-center justify-center">
      <img
        src={src}
        alt={alt}
        className="object-contain h-full w-auto"
      />
    </div>
  );
}


