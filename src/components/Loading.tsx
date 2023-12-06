import { Spinner } from "./Spinner";

interface LoadingProps {
  type?: "spinner" | "text";
}

function Text() {
  const company = import.meta.env.VITE_APP_NAME;

  return <span>{company}</span>;
}

export function Loading({ type = "spinner" }: LoadingProps) {
  return (
    <div className="container-fluid container-loading">
      <div className="row h-100 justify-content-center align-items-center">
        {type === "spinner" && <Spinner size="5em" color="dark" />}
        {type === "text" && <Text />}
      </div>
    </div>
  );
}
