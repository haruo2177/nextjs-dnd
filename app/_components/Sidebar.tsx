import Link from "next/link";

const menus = [
  {
    href: "/job-postings-match",
    label: "求人票マッチ",
  },
  {
    href: "/job-seeker-match",
    label: "求職者マッチ",
  },
];

export default function Sidebar() {
  return (
    <aside className="bg-gray-200 w-64 p-4">
      <ul className="space-y-2">
        {menus.map((menu) => (
          <li key={menu.href}>
            <Link href={menu.href} className="block p-2 rounded hover:bg-gray-300">
              {menu.label}
            </Link>
          </li>
        ))}{" "}
      </ul>
    </aside>
  );
}
