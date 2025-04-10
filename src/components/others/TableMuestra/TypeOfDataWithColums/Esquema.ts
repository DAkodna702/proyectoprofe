import { z } from "zod";

export const PeliculaEsquema = z.object({
  id: z.string(),
  Titulo: z.string(),
  Sinopsis: z.string(),
  Link: z.string(),
});

export type Task = z.infer<typeof PeliculaEsquema>;
