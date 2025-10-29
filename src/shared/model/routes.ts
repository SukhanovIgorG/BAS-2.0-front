import "react-router-dom";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  ITEMS: "/items",
  ITEM: "/items/:itemId",
} as const;

export type PathParams = {
  [ROUTES.ITEM]: {
    itemId: string;
  };
};

declare module "react-router-dom" {
  interface Register {
    params: PathParams;
  }
}
