import { createSignal, createEffect, onCleanup, Show } from "solid-js";
import { Portal } from "solid-js/web";
import { useTranslation } from "@/context/i18n";
import confetti from "canvas-confetti";

interface ThankYouScreenProps {
    isVisible: boolean;
    onComplete: () => void;
}

export function ThankYouScreen(props: ThankYouScreenProps) {
    const { t } = useTranslation();
    const [displayedText, setDisplayedText] = createSignal("");
    const [isComplete, setIsComplete] = createSignal(false);

    const thankYouMessage =
        t("donation.thankYou") || "Thank you for your support! 🙏";

    const triggerConfetti = () => {
        // Multiple confetti bursts for extra celebration!
        const end = Date.now() + 3000; // 3 seconds of confetti

        (function frame() {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ["#FCBC26", "#FFD700", "#FFA500", "#FF6B6B", "#4ECDC4"],
            });

            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ["#FCBC26", "#FFD700", "#FFA500", "#FF6B6B", "#4ECDC4"],
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();

        // Big celebration burst after 1 second
        setTimeout(() => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ["#FCBC26", "#FFD700", "#FFA500", "#FF6B6B", "#4ECDC4"],
            });
        }, 1000);
    };

    createEffect(() => {
        if (!props.isVisible) {
            setDisplayedText("");
            setIsComplete(false);
            return;
        }

        let timeoutId: ReturnType<typeof setTimeout>;
        let currentIndex = 0;

        const typeWriter = () => {
            if (currentIndex <= thankYouMessage.length) {
                setDisplayedText(thankYouMessage.slice(0, currentIndex));
                currentIndex++;
                timeoutId = setTimeout(typeWriter, 100); // Typing speed: 100ms per character
            } else {
                setIsComplete(true);

                // Trigger confetti celebration when typing is complete
                triggerConfetti();

                // Close after 5 seconds when typing is complete
                timeoutId = setTimeout(() => {
                    props.onComplete();
                }, 5000);
            }
        };

        // Start typing after a small delay
        timeoutId = setTimeout(typeWriter, 500);

        onCleanup(() => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        });
    });

    return (
        <Portal>
            <Show when={props.isVisible}>
                <div
                    class="bg-black/50 backdrop-blur-sm flex items-center justify-center"
                    style={{
                        position: "fixed",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        width: "100vw",
                        height: "100vh",
                        "z-index": "999999",
                        margin: "0",
                        padding: "0",
                    }}
                >
                    <div class="text-center px-8 w-full max-w-4xl">
                        <div class="text-4xl md:text-6xl font-bold text-white mb-4 break-words">
                            {displayedText()}
                            <Show when={!isComplete()}>
                                <span class="animate-pulse">|</span>
                            </Show>
                        </div>
                        <Show when={isComplete()}>
                            <div class="text-xl text-white/80 animate-fade-in">
                                {t("donation.supportMessage") ||
                                    "Your generosity means the world to me!"}
                            </div>
                        </Show>
                    </div>
                </div>
            </Show>
        </Portal>
    );
}
