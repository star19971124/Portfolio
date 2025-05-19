import KnowledgeType from "@/features/skills/model/knowledgeType";
import KnowledgeEntry from "@/features/skills/model/knowledgeEntry";
import FadeComponent from "@/components/motion/fadeComponent";
import React from "react";
import AnimatedProgress from "@/components/motion/animatedProgress";
import {useTranslations} from "next-intl";
import {SKILLS_T_NODE} from "@/features/skills/skills.constants";

const knowledgeMap = init()

function Knowledge() {
    const t = useTranslations(SKILLS_T_NODE)
    return <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-12">
            {
                buildKnowledgeByType(t,false)
            }
        </div>
    </div>

}
function buildKnowledgeByType(t,isLanguages= false){
    const knowledgeEntriesByType = !isLanguages ? Array.from(knowledgeMap.keys()).filter(k => k !== KnowledgeType.LANGUAGE) :
        Array.from(knowledgeMap.keys()).filter(k => k === KnowledgeType.LANGUAGE)
    return knowledgeEntriesByType.map(k =>
        <div key={k.value()} className="flex flex-col w-full">
            <div key={k.dividerStyle()} className={`divider divider-start ${k.dividerStyle()}`}>
                <h2 className="text-2xl uppercase">{t(k.value())}</h2>
            </div>
            {
                knowledgeMap.get(k).map(v =>
                    <div key={`${k.value()}-${v.key}`} className="flex items-center w-full">
                        <div className={`${isLanguages ? 'w-1/4 lg:w-1/12' :'w-1/4'} flex flex-shrink-0 items-start`}>
                            <FadeComponent>
                                <span className="text-left font-medium uppercase">{t(v.key)}</span>
                            </FadeComponent>
                        </div>
                        <div className={`${isLanguages ? 'w-3/4 lg:w-11/12' :'w-3/4'} flex justify-end items-center gap-2`}>
                            <div className="flex-grow ml-8 md:ml-0 mr-0 lg:mr-4">
                                <AnimatedProgress value={v.value}>
                                    <progress className={`progress w-full ${k.progressStyle()} `}
                                              value={v.value} max="10"/>
                                </AnimatedProgress>
                            </div>
                            <FadeComponent>
                                <span className="inline-block w-12 text-right">{`${v.value}/10`}</span>
                            </FadeComponent>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
function init() {
    const knowledgeMap = new Map();
    knowledgeMap.set(KnowledgeType.MOBILE, [
        new KnowledgeEntry('java', KnowledgeType.MOBILE, 8),
        new KnowledgeEntry('kotlin', KnowledgeType.MOBILE, 8),
    ])
    knowledgeMap.set(KnowledgeType.WEB, [
        new KnowledgeEntry('javascript', KnowledgeType.WEB, 10),
        new KnowledgeEntry('react', KnowledgeType.WEB, 9),
        new KnowledgeEntry('nextJs', KnowledgeType.WEB, 8),
        new KnowledgeEntry('tailwind', KnowledgeType.WEB, 10),
        new KnowledgeEntry('typescript', KnowledgeType.WEB, 9),
    ])
    knowledgeMap.set(KnowledgeType.DB_BACKEND, [
        new KnowledgeEntry('posgresql', KnowledgeType.DB_BACKEND, 7),
        new KnowledgeEntry('nodeJs', KnowledgeType.DB_BACKEND, 9),
        new KnowledgeEntry('firebase', KnowledgeType.DB_BACKEND, 8),
        new KnowledgeEntry('supabase', KnowledgeType.DB_BACKEND, 7),
        new KnowledgeEntry('mongodb', KnowledgeType.DB_BACKEND, 9),
    ])
    knowledgeMap.set(KnowledgeType.MD_PROCESS, [
        new KnowledgeEntry('ffmpeg', KnowledgeType.MD_PROCESS, 7),
    ])
    return knowledgeMap
}


export default Knowledge