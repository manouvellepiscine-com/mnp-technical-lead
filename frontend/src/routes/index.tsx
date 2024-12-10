import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import Menu from "~/assets/icons/menu";

// TODO: Implement routeLoader$ to get lists and items from the server.

export default component$(() => {
  return (
    <main class="w-full max-w-xl self-center">
      <header class="p-20 text-center">
        <p class="text-3xl font-semibold tracking-tight">Bonjour 👋</p>
        <p class="mt-3 text-sm text-secondary">
          Vous avez 2 tâches à faire aujourd'hui.
        </p>
      </header>

      {/* TODO: Display multiple lists with their tasks. */}
      <section class="flex flex-col gap-8 rounded-xl bg-surface p-5">
        <div class="flex items-center justify-between">
          <p class="text-sm uppercase text-secondary">Liste de course</p>

          {/* TODO: Implement logic. */}
          <button class="-m-2 rounded-lg px-3 py-1 text-sm font-medium text-error transition-colors hover:bg-error/10">
            Supprimer
          </button>
        </div>

        {/* TODO: Improve UI/UX (reordering, use label, add completedAt date, etc) and implement components & logic. */}
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-5">
            <Menu class="size-4 cursor-move text-secondary" />
            <input
              class="-mx-3 -my-1 flex-1 rounded-lg px-3 py-1 transition-colors hover:bg-background"
              value="Carottes"
            />
            <input
              class="aspect-square w-5 cursor-pointer rounded-md border-2 bg-background checked:bg-current"
              type="checkbox"
            />
          </div>
          <span class="h-px bg-quaternary" />
          <div class="flex items-center gap-5">
            <Menu class="size-4 cursor-move text-secondary" />
            <input
              class="-mx-3 -my-1 flex-1 rounded-lg px-3 py-1 transition-colors hover:bg-background"
              value="Oignons"
            />
            <input
              class="aspect-square w-5 cursor-pointer rounded-md border-2 bg-background checked:bg-current"
              type="checkbox"
            />
          </div>
          <span class="h-px bg-quaternary" />
          <div class="flex items-center gap-5">
            <Menu class="size-4 cursor-move text-secondary" />
            <input
              class="-mx-3 -my-1 flex-1 rounded-lg px-3 py-1 transition-colors hover:bg-background"
              value="Navets"
            />
            <input
              class="aspect-square w-5 cursor-pointer rounded-md border-2 bg-background checked:bg-current"
              type="checkbox"
            />
          </div>

          {/* TODO: Implement new task. */}
          <input
            class="mt-5 flex-1 rounded-lg bg-background px-3 py-2"
            placeholder="Nouvelle tâche..."
          />
        </div>
      </section>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
