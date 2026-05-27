import Image from "next/image";

import logoMark from "../assets/D3_logo_web.png";

type DiketaWordmarkProps = {
  "aria-label"?: string;
  href: string;
  priority?: boolean;
};

export function DiketaWordmark({
  "aria-label": ariaLabel,
  href,
  priority = false,
}: DiketaWordmarkProps) {
  return (
    <a aria-label={ariaLabel} className="wordmark" href={href}>
      <Image
        alt=""
        aria-hidden="true"
        className="wordmark__logo"
        height={31}
        priority={priority}
        src={logoMark}
        width={36}
      />
      <span>Diketa</span>
    </a>
  );
}
