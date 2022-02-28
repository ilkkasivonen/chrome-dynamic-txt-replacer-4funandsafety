walk(document.body);

function walk(node)
{
	// cloud-to-butt author stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
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

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bPresident Putin\b/g, "war criminal Putin");
	v = v.replace(/\bpresident Putin\b/g, "war criminal Putin");
	v = v.replace(/\bPresident Vladimir Putin\b/g, "war criminal Putin");
	v = v.replace(/\bpresident Vladimir Putin\b/g, "war criminal Putin");
	v = v.replace(/\bpresidentti Putin\b/g, "sotarikollinen Putin");
	v = v.replace(/\bPresidentti Putin\b/g, "sotarikollinen Putin");
	v = v.replace(/\bPresidentti Vladimir Putin\b/g, "sotarikollinen Putin");
	v = v.replace(/\bpresidentti Vladimir Putin\b/g, "sotarikollinen Putin");

	textNode.nodeValue = v;
}
