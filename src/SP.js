window.onload = function () {
	const metaSections = document.querySelectorAll(".blog-meta-section");
	metaSections.forEach((metaSection, index) => {
		metaSection?.classList.add("context-marker");
		document.querySelectorAll(".blog-basic-grid--container div")[index]?.appendChild(metaSection);
	});

	const metaSection1 = document.querySelectorAll(".summary-metadata-container summary-metadata-container--above-title");
	metaSection1.forEach((metaSection, index) => {
		metaSection?.classList.add("context-marker");
		document.querySelectorAll(".summary-thumbnail-outer-container")[index]?.appendChild(metaSection);
	});
};
