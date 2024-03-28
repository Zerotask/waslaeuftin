import { z } from "zod";

export const KinoHeldCinemas = z.enum([
  "traumpalast_leonberg",
  "karlsruhe_schauburg",
  "merkur_filmcenter_gaggenau",
  "moviac_baden_baden",
  "cineplex_baden_baden",
]);

export type KinoHeldCinemasType = z.infer<typeof KinoHeldCinemas>;