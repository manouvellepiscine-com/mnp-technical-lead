import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <>
      <nav class="flex items-center gap-5 p-5">
        <h1 class="flex-1 text-lg font-medium text-current">
          manouvelletodo<span class="text-yellow">.com</span>
        </h1>

        {/* TODO: Implement new list modal. */}
        <button class="hover:bg-current/10 text-secondary rounded-lg px-3 py-2 font-medium transition-all hover:text-current">
          Nouvelle liste
        </button>
      </nav>

      <Slot />
    </>
  );
});
