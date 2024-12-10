import { component$ } from '@builder.io/qwik';

export default component$<{ class: string }>(({ class: className }) => {
  return (
    <svg
      class={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="11 17 6 12 11 7"></polyline>
      <polyline points="18 17 13 12 18 7"></polyline>
    </svg>
  );
});
