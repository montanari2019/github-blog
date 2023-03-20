import { format, formatDistanceToNow } from "date-fns";

import ptBR from "date-fns/locale/pt-BR";

export function dateFormat(date:string){
    const publisherdDateFormatted = format(new Date(date), "d 'de' LLLL 'às' HH:mm'h'", {locale:ptBR});

   const publisherdDateRelativeToNow = formatDistanceToNow(new Date(date), {
    locale: ptBR,
    addSuffix: true,
  });

  return {publisherdDateFormatted, publisherdDateRelativeToNow}
}