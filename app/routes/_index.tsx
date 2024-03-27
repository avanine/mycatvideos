import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "My Cat Videos" },
    { name: "description", content: "Cat videos!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}
