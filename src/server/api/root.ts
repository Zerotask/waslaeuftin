import { cinemaRouter } from "@waslaeuftin/server/api/routers/cinemaRouter";
import { citiesRouter } from "@waslaeuftin/server/api/routers/citiesRouter";
import { githubRouter } from "@waslaeuftin/server/api/routers/githubRouter";
import { moviesRouter } from "@waslaeuftin/server/api/routers/moviesRouter";
import {
  createCallerFactory,
  createTRPCRouter,
} from "@waslaeuftin/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  movies: moviesRouter,
  cities: citiesRouter,
  github: githubRouter,
  cinemas: cinemaRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
