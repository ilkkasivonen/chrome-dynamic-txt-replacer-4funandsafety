walk(document.body);

function walk(node) {
    // cloud-to-butt author stole this function from here:
    // http://is.gd/mwZp7E

    var child, next;

    switch (node.nodeType) {
        case 1: // Element
        case 9: // Document
        case 11: // Document fragment
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
    }
}

function handleText(textNode) {
    var v = textNode.nodeValue;

    v = v.replace(/President Putin/g, "war criminal Putin");
    v = v.replace(/president Putin/g, "war criminal Putin");
    v = v.replace(/President Vladimir Putin/g, "war criminal Putin");
    v = v.replace(/president Vladimir Putin/g, "war criminal Putin");
    v = v.replace(/presidentti Putin/g, "sotarikollinen Putin");
    v = v.replace(/Presidentti Putin/g, "sotarikollinen Putin");
    v = v.replace(/Presidentti Vladimir Putin/g, "sotarikollinen Putin");
    v = v.replace(/presidentti Vladimir Putin/g, "sotarikollinen Putin");
    v = v.replace(/Putin/g, "sotarikollinen Putin");

    textNode.nodeValue = v;
}
