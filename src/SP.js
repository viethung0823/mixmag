window.onload = function () {
	const metaSection = document.querySelector(".blog-meta-section");
	metaSection?.classList.add("context-marker");
	document.querySelector(".blog-basic-grid--container div")?.appendChild(metaSection);

	const metaSection1 = document.querySelector(".summary-metadata-container");
	metaSection1?.classList.add("context-marker");
	document.querySelector(".summary-thumbnail-outer-container")?.appendChild(metaSection1);
};
