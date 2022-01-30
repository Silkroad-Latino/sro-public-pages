export const ignoreHtmlTags = text => text.replace(/(<([^>]+)>)/gi, "");

export const cutString = text => {
    if(!text && typeof text !== "string")
        return text;

    return `${text.slice(0, 247)}...`;
};

export const toNewsUrl = (title, id= "") => {
    if(!title && typeof title !== "string")
        return "";

    const url = title
        .replace(/\[/g, "")
        .replace(/]/g, "")
        .replace(/ /g, "-")
        .replace(/\//g, "")

    return `${url}${id ? "-"+id : ""}`;
}