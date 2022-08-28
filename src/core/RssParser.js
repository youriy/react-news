export class RssParser {

    allowOrigin = 'https://api.allorigins.win/get?url='

    constructor(rssUrl) {
        this.allowOrigin += rssUrl;
    }

    async parse() {
        let response = await fetch(this.allowOrigin);
        let result = await response.json();
        let feed = new window.DOMParser().parseFromString(result.contents, "text/xml");
        let items = feed.getElementsByTagName('item');

        return [...items].map(el => ({
            link: this.parseElement(el, "link"),
            title: this.parseElement(el, "title"),
            author: this.parseElement(el, "author"),
            pubDate: this.parseElement(el, "pubDate"),
            description: this.parseElement(el, "description"),
            enclosure: this.parseEnclosure(el)
        }));
    }

    parseElement(element, tag) {
        return element.querySelector(tag)?.innerHTML
                .replace('<![CDATA[', '')
                .replace(']]>', '')
            || null;
    }

    parseEnclosure(element) {
        return element.querySelector("enclosure")?.attributes.url?.value || null;
    }
}
