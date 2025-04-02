import KnowledgeType from "@/model/knowledgeType";
import KnowledgeEntry from "@/model/knowledgeEntry";
import FadeComponent from "@/app/components/fadeComponent";
import React from "react";
import AnimatedProgress from "@/app/components/animatedProgress";

const knowledgeMap = init()

function Knowledge() {
    return <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-12">
            {
                Array.from(knowledgeMap.keys()).map(k =>
                    <div key={k.label()} className="flex flex-col ">
                        <div key={k.dividerStyle()} className={`divider divider-start ${k.dividerStyle()}`}><h2
                            key={k.label()}
                            className="text-2xl">{k.label()}</h2>
                        </div>
                        {
                            knowledgeMap.get(k).map(v =>
                                <div key={`${k.label()}-${v.label}`}
                                     className="flex justify-between items-center gap-8 w-full">
                                    <FadeComponent><span className="w-1/4 text-left">{`${v.label.toUpperCase()}:`}</span></FadeComponent>
                                    <AnimatedProgress value={v.value}>
                                        <progress className={`progress w-3/4 ${k.progressStyle()}`} value={0}
                                                  max="10"/>
                                    </AnimatedProgress>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
        <div className="container mx-auto flex flex-col mt-5">
            <div className="divider divider-start divider-success"><h2 className="text-2xl">SPOKEN LANGUAGES</h2></div>
            <div className="flex justify-between items-center gap-8 w-full">
                <FadeComponent><span className="w-1/6 text-left">ITALIAN:</span></FadeComponent>
                <AnimatedProgress value="10">
                    <progress className={`progress  progress-success w-5/6`} value={0}
                              max="10"/>
                </AnimatedProgress>
            </div>
            <div className="flex justify-between items-center gap-8 w-full">
                <FadeComponent><span className="w-1/6 text-left">ENGLISH:</span></FadeComponent>
                <AnimatedProgress value="9">
                    <progress className="progress progress-success w-5/6" value={0}
                              max="10"/>
                </AnimatedProgress>
            </div>
            <div className="flex justify-between items-center gap-8 w-full">
                <FadeComponent><span className="w-1/6 text-left">GERMAN:</span></FadeComponent>
                <AnimatedProgress value="8">
                    <progress className="progress progress-success w-5/6" value={0}
                              max="10"/>
                </AnimatedProgress>
            </div>
        </div>
    </div>

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
        new KnowledgeEntry('NextJS', KnowledgeType.WEB, 7),
        new KnowledgeEntry('Tailwind', KnowledgeType.WEB, 7),
    ])
    knowledgeMap.set(KnowledgeType.DB_BACKEND, [
        new KnowledgeEntry('PosgreSQL', KnowledgeType.DB_BACKEND, 9),
        new KnowledgeEntry('Firebase', KnowledgeType.DB_BACKEND, 10),
        new KnowledgeEntry('Supabase', KnowledgeType.DB_BACKEND, 8),
        new KnowledgeEntry('Mongodb', KnowledgeType.DB_BACKEND, 7),
    ])
    knowledgeMap.set(KnowledgeType.MD_PROCESS, [
        new KnowledgeEntry('FFmpeg', KnowledgeType.MD_PROCESS, 6),
    ])
    return knowledgeMap
}


export default Knowledge