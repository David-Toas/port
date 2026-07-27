import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { icon: <FaGithub />, label: "GitHub", path: "https://github.com/David-Toas" },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    path: "https://www.linkedin.com/in/showole-olabode",
  },
  { icon: <FaXTwitter />, label: "X", path: "https://x.com/Toasking06" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
