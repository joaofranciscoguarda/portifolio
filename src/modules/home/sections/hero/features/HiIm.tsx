import { Button } from "@/components/ui";
import { useTranslation } from "@/context/i18n";
import { breakPoints } from "@/hooks";
import { A } from "@solidjs/router";
import { createSignal } from "solid-js";
import { DonationModal, Icon, ThankYouScreen } from "@/components/features";

export function HiIm() {
    const { t } = useTranslation();
    const screen = breakPoints;
    const [showDonationModal, setShowDonationModal] = createSignal(false);
    const [showThankYou, setShowThankYou] = createSignal(false);

    return (
        <div
            class={`md:w-[50%] ${screen.mobile && !screen.md ? "absolute z-40 top-[17rem] backdrop-blur-sm drop-shadow-[0_20px_20px_rgba(255,255,255,0.05)] rounded-3xl p-6" : ""}`}
        >
            <div class=" flex flex-col justify-center gap-10">
                <div>
                    <p class="text-h1">{t("hero.hi")?.toUpperCase()}</p>
                    <h1 class="text-accent">
                        {t("hero.myName")?.toUpperCase()}
                    </h1>
                    <p>{t("hero.andIm")}</p>
                </div>
                <div class="flex flex-col sm:flex-row gap-4">
                    <A href="#contact">
                        <Button size="xl" class="gap-3">
                            {t("buttons.contactMe")?.toLocaleUpperCase()}
                            <div class="w-2 h-2 bg-background rounded-full" />
                        </Button>
                    </A>
                    <Button
                        size="xl"
                        variant="outline"
                        class="gap-3"
                        onClick={() => setShowDonationModal(true)}
                    >
                        <Icon icon="coffee" class="w-5 h-5" />
                        {t("buttons.buyMeCoffee")?.toLocaleUpperCase()}
                    </Button>
                </div>
            </div>

            <DonationModal
                isOpen={showDonationModal()}
                onClose={() => setShowDonationModal(false)}
                onDonationSuccess={() => {
                    setShowDonationModal(false);
                    setShowThankYou(true);
                }}
            />

            <ThankYouScreen
                isVisible={showThankYou()}
                onComplete={() => setShowThankYou(false)}
            />
        </div>
    );
}
