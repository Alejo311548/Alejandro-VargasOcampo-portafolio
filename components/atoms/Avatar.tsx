import Image from 'next/image';

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

export default function Avatar({ src, alt, size = 300, className = '' }: AvatarProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-2xl shadow-xl"
      />
    </div>
  );
}
