window.onload = function () {
	const metaSections = document.querySelectorAll(".blog-meta-section");
	metaSections.forEach((metaSection) => {
		metaSection?.classList.add("context-marker");
		document.querySelector(".blog-basic-grid--container div")?.appendChild(metaSection);
	});

	const metaSection1 = document.querySelectorAll(".summary-metadata-container");
	metaSections.forEach((metaSection) => {
		metaSection1?.classList.add("context-marker");
		document.querySelector(".summary-thumbnail-outer-container")?.appendChild(metaSection1);
	});
};
