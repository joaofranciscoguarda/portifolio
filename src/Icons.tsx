import { createResource, Show } from "solid-js";

interface IconProps {
  icon: string;
}

export function Icon(props: IconProps) {
  const [lazyIcon] = createResource(
    () => props.icon,
    async (iconName) => {
      try {
        const lazyFile = await import(
          `./assets/icons/${iconName}.svg?component-solid`
        );
        return lazyFile.default;
      } catch {
        return null;
      }
    }
  );

  return (
    <Show when={lazyIcon()} fallback={<div>A fallback here</div>}>
      {(LoadedIcon) => (
        <div>
          {LoadedIcon()}
        </div>
      )}
    </Show>
  );
}