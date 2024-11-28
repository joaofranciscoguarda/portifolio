import { A } from "@solidjs/router";
import { Button } from "@/components/ui/button";
import { SelectLang } from "@/components/features/select-lang";
import { breakPoints } from "@/hooks";
import { Show } from "solid-js";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useTranslation } from "@/context/i18n";

export function BaseHeader() {
    const { t } = useTranslation();
    const screen = breakPoints;

    return (
        <div class="z-50 sticky top-0 px-4 md:px-20 w-full backdrop-blur-sm drop-shadow-lg rounded-b-2xl">
            <div class="container flex items-center justify-between h-[96px]">
                <A href="#me">
                    <p class="font-bebas text-[2rem] lg:text-[2.5rem]">
                        {`<${t("hero.myName")}/>`}
                    </p>
                </A>
                <Show when={screen.mobile && !screen.lg}>
                    <Drawer>
                        {(props) => (
                            <>
                                <DrawerTrigger
                                    as={Button}
                                    variant={"secondary"}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    </svg>
                                </DrawerTrigger>
                                <DrawerContent>
                                    <HeaderButtons drawer={props} />
                                </DrawerContent>
                            </>
                        )}
                    </Drawer>
                </Show>
                <Show when={screen.lg}>
                    <HeaderButtons />
                </Show>
            </div>
        </div>
    );
}

interface HeaderButtonsProps {
    drawer?: any; // didnt found the correct way to type the props at drawer
}

function HeaderButtons({ drawer }: HeaderButtonsProps) {
    const { t } = useTranslation();
    const screen = breakPoints;
    const variant = screen.lg ? "link" : "secondary";
    const onClick = () => (screen.lg ? null : drawer?.setOpen(false));

    return (
        <div class="py-10 lg:py-0 flex flex-col lg:flex-row items-center gap-5 justify-end min-w-[35%]">
            {import.meta.env.DEV && (
                <A href="/dict" onClick={onClick}>
                    <Button variant={variant}>Dict</Button>
                </A>
            )}
            <A href="#skills" onClick={onClick}>
                <Button variant={variant}>{t("buttons.skills")}</Button>
            </A>
            <A href="#work" onClick={onClick}>
                <Button variant={variant}>{t("buttons.work")}</Button>
            </A>
            <A href="#about" onClick={onClick}>
                <Button variant={variant}>{t("buttons.about")}</Button>
            </A>
            <A href="#contact" onClick={onClick}>
                <Button variant={variant}>{t("buttons.contact")}</Button>
            </A>
            <SelectLang />
        </div>
    );
}
