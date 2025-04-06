import KnowledgeType from "@/model/knowledgeType";
import KnowledgeEntry from "@/model/knowledgeEntry";
import FadeComponent from "@/app/components/clientComponents/fadeComponent";
import React from "react";
import AnimatedProgress from "@/app/components/clientComponents/animatedProgress";

const knowledgeMap = init()

function Knowledge() {
    console.log(knowledgeMap.get(KnowledgeType.LANGUAGE))
    return <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-12">
            {
                buildKnowledgeByType(false)
            }
        </div>
        <div className="container mx-auto flex flex-col mt-5">
            {
                buildKnowledgeByType(true)
            }
        </div>
    </div>

}
function buildKnowledgeByType(isLanguages= false){
    const knowledgeEntriesByType = !isLanguages ? Array.from(knowledgeMap.keys()).filter(k => k !== KnowledgeType.LANGUAGE) :
        Array.from(knowledgeMap.keys()).filter(k => k === KnowledgeType.LANGUAGE)
    return knowledgeEntriesByType.map(k =>
        <div key={k.label()} className="flex flex-col w-full">
            <div key={k.dividerStyle()} className={`divider divider-start ${k.dividerStyle()}`}>
                <h2 key={k.label()} className="text-2xl">{k.label()}</h2>
            </div>
            {
                knowledgeMap.get(k).map(v =>
                    <div key={`${k.label()}-${v.label}`} className="flex items-center w-full">
                        <div className={`${isLanguages ? 'w-1/4 lg:w-1/12' :'w-1/4'} flex flex-shrink-0 items-start`}>
                            <FadeComponent>
                                <span className="text-left font-medium">{`${v.label.toUpperCase()}:`}</span>
                            </FadeComponent>
                        </div>
                        <div className={`${isLanguages ? 'w-3/4 lg:w-11/12' :'w-3/4'} flex justify-end items-center gap:1 lg:gap-4 `}>
                            <div className="flex-grow mr-4">
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
        new KnowledgeEntry('Java', KnowledgeType.MOBILE, 10),
        new KnowledgeEntry('Kotlin', KnowledgeType.MOBILE, 10),
        new KnowledgeEntry('Flutter', KnowledgeType.MOBILE, 10),
    ])
    knowledgeMap.set(KnowledgeType.WEB, [
        new KnowledgeEntry('Javascript', KnowledgeType.WEB, 9),
        new KnowledgeEntry('React', KnowledgeType.WEB, 7),
        new KnowledgeEntry('Next.JS', KnowledgeType.WEB, 8),
        new KnowledgeEntry('Tailwind', KnowledgeType.WEB, 7),
    ])
    knowledgeMap.set(KnowledgeType.DB_BACKEND, [
        new KnowledgeEntry('PosgreSQL', KnowledgeType.DB_BACKEND, 9),
        new KnowledgeEntry('Node.js', KnowledgeType.DB_BACKEND, 9),
        new KnowledgeEntry('Firebase', KnowledgeType.DB_BACKEND, 10),
        new KnowledgeEntry('Supabase', KnowledgeType.DB_BACKEND, 8),
        new KnowledgeEntry('MongoDB', KnowledgeType.DB_BACKEND, 7),
    ])
    knowledgeMap.set(KnowledgeType.MD_PROCESS, [
        new KnowledgeEntry('FFmpeg', KnowledgeType.MD_PROCESS, 6),
    ])
    knowledgeMap.set(KnowledgeType.LANGUAGE, [
        new KnowledgeEntry('Italian', KnowledgeType.LANGUAGE, 10),
        new KnowledgeEntry('English', KnowledgeType.LANGUAGE, 9),
        new KnowledgeEntry('German', KnowledgeType.LANGUAGE, 8),
    ])
    return knowledgeMap
}


export default Knowledge