export default function LogoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="#323334"
      role="img"
      aria-label="Monograph"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M0 32V.241h23.041zM31.15 32V.241h-4.411L17.48 13.158zM3.645 32l11.854-15.879L27.353 32z"
      />
    </svg>
  );
}
