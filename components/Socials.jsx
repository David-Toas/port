import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const socials = [
  { icon: <GitHubIcon />, path: "https://github.com/David-Toas" },
  { icon: <LinkedInIcon />, path: "https://www.linkedin.com/in/showole-olabode" },
  { icon: <XIcon />, path: "https://x.com/Toasking06" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
