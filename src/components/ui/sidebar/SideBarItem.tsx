import Link from "next/link";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  text: string;
  href: string;
}

export const SideBarItem = ({ icon: Icon, text, href }: Props) => {
  return (
    <Link 
      href={href}
      className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
    >
      <Icon size={30} className="mr-3" />
      <span>{text}</span>
    </Link>
  )
}