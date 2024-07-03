import withMDX from '@next/mdx';
import { visit } from 'unist-util-visit';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
};

export default withMDX({
  options: {
    rehypePlugins: [
      () =>
        (
          /** @type {import('unist').Node} */
          tree,
        ) => {
          visit(
            tree,
            'mdxJsxTextElement',
            (
              /** @type {import('unist').Node} */
              node,
            ) => {
              if (node.data) {
                delete node.data._mdxExplicitJsx;
              }
            },
          );
        },
    ],
  },
})(nextConfig);
