declare module "*.module.css" {
  const classes: Record<string, string>;
  export default classes;
}

// Flag de desenvolvimento definida pelo bundler
declare const __DEV__: boolean;

