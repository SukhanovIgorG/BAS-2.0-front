import { ROUTES } from "@/shared/model/routes";
import { Link } from "react-router-dom";

function ItemPage() {
  return (
    <div>
      <h2>ItemPage</h2>
      <h1>Welcome to evolution design template</h1>
      <Link to={ROUTES.ITEMS} title="Items">
        Route items
      </Link>
    </div>
  );
}

export const Component = ItemPage;
