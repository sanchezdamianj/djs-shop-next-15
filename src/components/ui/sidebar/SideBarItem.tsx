import Link from "next/link";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  text: string;
  href: string;
  onClick?: () => void
}

export const SideBarItem = ({ icon: Icon, text, href, onClick }: Props) => {
  return (
    <Link 
      href={href}
      className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
      onClick={onClick}
    >
      <Icon size={30} className="mr-3" />
      <span>{text}</span>
    </Link>
  )
}