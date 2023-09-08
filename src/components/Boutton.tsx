
import { ButtonProps } from "@/utils/types-zod";
import Link from "next/link";

export default function Button({ textarea, link }: ButtonProps) {
  return (
    <Link
      href=""
      className="mt-8 inline-block border rounded-md border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
    >
      {textarea}
    </Link>
  );
}
