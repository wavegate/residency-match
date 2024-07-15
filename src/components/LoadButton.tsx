import { Loader2 } from "lucide-react";
import { Button as ShadcnButton } from "@/components/ui/button";

export default function LoadButton({ loading, children, ...props }) {
  return (
    <ShadcnButton {...props} disabled={!!loading}>
      {!!loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </ShadcnButton>
  );
}
