import { RefreshCcw } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { useDebounce } from "@/shared/hooks/useDebounce";

import { Button } from "@/components/ui/button";

export function ShopRefreshButton() {
  const queryClient = useQueryClient();

  const handleRefresh = useDebounce(() => {
    const refreshPromise = queryClient.invalidateQueries({
      queryKey: ["shop"],
    });

    toast.promise(refreshPromise, {
      loading: "Atualizando lista...",
      success: "Lista atualizada com sucesso!",
      error: "Erro ao atualizar a lista",
    });
  }, 500);

  return (
    <Button
      variant="update"
      className="h-14 text-base font-bold"
      onClick={handleRefresh}
    >
      <RefreshCcw className="w-5 h-5" /> Atualizar
    </Button>
  );
}
