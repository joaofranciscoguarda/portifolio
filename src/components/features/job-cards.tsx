import { ParentProps } from "solid-js";
import { GlassCard } from "./glass-card";

interface JobCardProps extends ParentProps {
    title?: string;
    link?: string;
    position?: string;
    startsAt?: string;
    endsAt?: string;
    timeDiff?: string;
}

export function JobCard(props: JobCardProps) {
    return (
        <GlassCard>
            <a href={props.link} target="_blank" class="text-h3 text-primary">
                {props.title}
            </a>
            <p class="text-accent">{props.position}</p>
            <div class="flex items-center gap-2">
                <p>
                    {props.startsAt} {" -> "} {props.endsAt}
                </p>
                <p class="text-sm">({props.timeDiff})</p>
            </div>
        </GlassCard>
    );
}
