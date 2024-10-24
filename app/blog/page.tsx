import Head from "next/head";

import { Card } from "@components/BlogCard";

import { blogData } from "../../data/blogs.json";
import React from "react";

const Blog = () => (
  <>
    <Head>
      <title>Travis' Blog</title>
    </Head>

    {/* grab the last three blogs */}
    {blogData.slice(-3).map(Card)}
  </>
);
export default Blog;
