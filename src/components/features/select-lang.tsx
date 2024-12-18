import { useTranslation } from "@/context/i18n";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { Locale } from "@/plugins/i18n";

export function SelectLang() {
    const { t, setLocale, locale } = useTranslation();

    return (
        <Select<Locale>
            class="border-accent border-[1px] rounded-md text-primary"
            options={["en_US", "pt_BR", "es_ES"]}
            placeholder={t(`locale.${locale()}`)}
            itemComponent={(props) => (
                <SelectItem item={props.item}>
                    {t(`locale.${props.item.rawValue}`)}
                </SelectItem>
            )}
        >
            <SelectTrigger class="h-12 w-24 flex justify-center">
                <SelectValue<Locale>>
                    {(state) => {
                        setLocale(state.selectedOption());
                        return t(`locale.${state.selectedOption()}`);
                    }}
                </SelectValue>
            </SelectTrigger>
            <SelectContent class="bg-background border-primary" />
        </Select>
    );
}
