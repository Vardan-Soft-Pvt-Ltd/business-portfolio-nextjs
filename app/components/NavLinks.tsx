import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = ["Coaching", "Product Consulting", "Masterclass", "Speaking"];

interface NavLinksProps {
  isOpen: boolean;
}

const NavLinks: React.FC<NavLinksProps> = () => {
  const currentPath = usePathname();

  const routes = [
    "/coaching",
    "/product-consulting",
    "/masterclass",
    "/speaking",
  ];

  return (
    <ul
      className={`w-full flex flex-col md:flex-row justify-center items-center bg-white
       shadow-md md:static md:flex
       gap-8 md:bg-transparent md:shadow-none
        md:opacity-100 py-8 `}
    >
      {navLinks.map((link) => {
        const linkPath = `/${link.toLowerCase().replace(" ", "-")}`;
        const isActive = currentPath === linkPath;

        return (
          <li
            key={link}
            className="relative text-sm font-norma transition 
            duration-300 group"
          >
            <Link
              href={linkPath}
              className={`hover:border-none ${
                isActive
                  ? "text-[#4F46E5]"
                  : `${
                      routes.includes(currentPath)
                        ? "text-[#2B3674]"
                        : "text-white"
                    }`
              }`}
            >
              {link}
            </Link>
            <span
              className={`absolute left-0 -bottom-1 w-full h-1 transition-opacity duration-300 ${
                isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              <svg
                width="100%"
                height="10"
                viewBox="0 0 72 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M70.321 9.23416C70.7265 9.60915 71.3592 9.58444 71.7342 9.17897C72.1092 8.77351 72.0844 8.14082 71.679 7.76584L70.321 9.23416ZM1.24833 8.25224C22.6726 2.75999 38.7039 1.83132 50.0135 2.87632C61.3701 3.92565 67.8536 6.9522 70.321 9.23416L71.679 7.76584C68.739 5.0469 61.7337 1.95072 50.1976 0.884804C38.6146 -0.185446 22.3496 0.778119 0.751674 6.31489L1.24833 8.25224Z"
                  fill="#4F46E5"
                />
              </svg>
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
