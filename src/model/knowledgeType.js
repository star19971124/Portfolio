class KnowledgeType {
    constructor(type) {
        this.type = type;
    }

    static MOBILE = new KnowledgeType('mobile');
    static WEB = new KnowledgeType('web');
    static DB_BACKEND = new KnowledgeType('db & backend');
    static MD_PROCESS = new KnowledgeType('media proc.');
    static LANGUAGE = new KnowledgeType('language');


    dividerStyle() {

        switch (this.type) {
            case 'mobile':
                return 'divider-mobile'
            case 'web':
                return 'divider-web'
            case 'db & backend':
                return 'divider-db'
            case 'media proc.':
                return 'divider-media'
            case 'language':
                return 'divider-languages'
        }
    }

    progressStyle() {
        switch (this.type) {
            case 'mobile':
                return 'progress-mobile';
            case 'web':
                return 'progress-web';
            case 'db & backend':
                return 'progress-db';
            case 'media proc.':
                return 'progress-media';
            case 'language':
                return 'progress-languages';
        }
    }

    label() {
        return this.type.toUpperCase()
    }

    static values() {
        return [this.MOBILE, this.WEB, this.DB_BACKEND, this.MD_PROCESS, this.LANGUAGE];
    }
}

export default KnowledgeType