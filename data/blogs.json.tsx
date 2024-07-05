import { oneLine } from "common-tags";

type BlogData = {
  key: React.Key;
  uri: string;
  title: string;
  description: string;
};

// Databases are overrated
export const blogData: BlogData[] = [
  {
    key: "966d25cb-edbb-4407-badc-82f1b56ab4ac",
    uri: "getting-started",
    title: "Learning to <code />",
    description: oneLine`
      Is manually coded HTML the new CMS Hotness? Probably not, but it's
      pretty fun to play around with. Let's get our toes wet by taking a
      look at the cool CSS we can use to spice up our blog posts.
    `,
  },
];
