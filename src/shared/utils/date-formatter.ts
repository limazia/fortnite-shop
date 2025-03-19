import { differenceInDays, isYesterday, format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDateWithRelative(fileCreatedTime: Date): string {
  const today = new Date();
  const createdDate = new Date(fileCreatedTime);
  const diffInDays = differenceInDays(today, createdDate);

  if (diffInDays === 0) {
    return "Hoje";
  } else if (diffInDays === 1 || isYesterday(createdDate)) {
    return "Ontem";
  } else if (diffInDays === 7) {
    return "7 dias atrás";
  } else if (diffInDays > 1 && diffInDays < 7) {
    return `${diffInDays} dias atrás`;
  } else {
    return format(createdDate, "dd/MM/yyyy", { locale: ptBR });
  }
}

export function formatDate(date?: string | Date): string {
  if (!date) return "Data inválida";

  const parsedDate = typeof date === "string" ? new Date(date) : date;

  if (isNaN(parsedDate.getTime())) return "Data inválida";

  return format(parsedDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
}
