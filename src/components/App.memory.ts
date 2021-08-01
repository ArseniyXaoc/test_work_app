


class FetchingData {
    url: string;
    authentication_token: string;
    context: string;
    context_id: string;
    theme_id: string;
    widget_id: string;

    constructor(url: string, authentication_token: string, context: string, context_id: string, theme_id: string, widget_id: string) {
        this.url = url;
        this.authentication_token = authentication_token;
        this.context = context;
        this.context_id = context_id;
        this.theme_id = theme_id;
        this.widget_id = widget_id;
    }

    async getData(page: string, per_page: string) {
        try {
            let response = await fetch(`${this.url}?
            authentication_token=${this.authentication_token}&
            context=${this.context}&
            context_id=${this.context_id}&
            theme_id=${this.theme_id}&
            widget_id=${this.widget_id}`);

            let body = await response.json();
            return body;
        } catch (error) {
            throw new Error(error);

        }

    }


}

export default FetchingData;