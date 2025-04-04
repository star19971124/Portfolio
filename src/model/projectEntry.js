class ProjectEntry {
    constructor(title, description,imageUrl, url, techList, inProgress = false) {
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.url = url;
        this.techList = techList;
        this.inProgress = inProgress;
    }

    isPublic() {
        return this.url && this.url.trim() !== ''
    }

    getVisibility(){
        return this.isPublic() ? 'public' : 'private'
    }

}

export default ProjectEntry