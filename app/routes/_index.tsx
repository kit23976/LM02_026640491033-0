import type { MetaFunction } from "@remix-run/node";
import AppMenu from './Template/menu.js'; 

export const meta: MetaFunction = () => {
  return [
    { title: "Krisanon" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function EProject() {
  return (
    <>
      <main>
      { <AppMenu />}
      </main>
    </>
  );
}