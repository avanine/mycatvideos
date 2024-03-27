import type { MetaFunction } from "@remix-run/node";

import EmbeddedVideo from "~/ui/EmbeddedVideo";

export const meta: MetaFunction = () => {
  return [
    { title: "My Cat Videos" },
    { name: "description", content: "Cat videos!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Hello World</h1>
      <EmbeddedVideo link="https://www.youtube.com/embed/9VC_5Cxg1NM?si=NW7I7JEctSnKRW0W" />
    </div>
  );
}
