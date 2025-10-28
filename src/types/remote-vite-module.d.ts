declare module "http://localhost:3000/my-vite-esm-module.js" {
  import type { ComponentType } from "react";

  // Samakan dengan definisi di Vite
  export interface SimpleViteComponentProps {
    message: string;
  }

  // Peta komponen ke tipe props
  export const SimpleViteComponent: ComponentType<SimpleViteComponentProps>;
}