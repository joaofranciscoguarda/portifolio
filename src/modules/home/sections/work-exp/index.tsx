import { useTranslation } from "@/context/i18n";
import { HomeSection } from "../../components";
import { JobCard } from "@/components/features/job-cards";

export function WorkExp() {
    const { t } = useTranslation();

    return (
        <HomeSection id="work">
            <div class="flex flex-col items-center">
                <h2>{t("works.head")}</h2>
                <div class="mt-20 flex flex-col gap-10 w-full">
                    <JobCard
                        title={t("works.psyze.title")}
                        position={t("works.psyze.position")}
                        link="https://psyze.com"
                        startsAt={t("works.psyze.startsAt")}
                        endsAt={t("works.psyze.endsAt")}
                    ></JobCard>
                    <JobCard
                        title={t("works.khiza.title")}
                        position={t("works.khiza.position")}
                        link="https://khizadao.com"
                        startsAt={t("works.khiza.startsAt")}
                        endsAt={t("works.khiza.endsAt")}
                        timeDiff={t("works.khiza.timeDiff")}
                    ></JobCard>
                </div>
            </div>
        </HomeSection>
    );
}
