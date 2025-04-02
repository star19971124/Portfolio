import WorkIcon from "./workIcon.jsx";
import StudyIcon from "./studyIcon.jsx";
import FadeComponent from "../fadeComponent.jsx";

// eslint-disable-next-line react/prop-types
function TimelineIcon({work = true}) {
    return <div className="timeline-middle">
        {work ? <WorkIcon></WorkIcon> : <StudyIcon></StudyIcon>}
    </div>
}

export default TimelineIcon