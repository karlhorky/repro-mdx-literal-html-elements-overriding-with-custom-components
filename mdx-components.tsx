import { MDXComponents } from 'mdx/types';

const components = {
  video: () => <div>video replacement</div>,
} satisfies MDXComponents;

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
