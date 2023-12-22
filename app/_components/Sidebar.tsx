import Link from "next/link";

const menus = [
  {
    href: "/path1",
    label: "メニュー1",
  },
  {
    href: "/path2",
    label: "メニュー2",
  },
  {
    href: "/path3",
    label: "メニュー3",
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
