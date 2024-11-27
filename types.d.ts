declare module "*.png";

declare module "*.inline" {
  const content: string;
  export default content;
}
