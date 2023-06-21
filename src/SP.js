window.onload = function () {
	const metaSections = document.querySelectorAll(".blog-meta-section");
	metaSections.forEach((metaSection, index) => {
		metaSection?.classList.add("context-marker");
		document.querySelectorAll(".blog-basic-grid--container div")[index]?.appendChild(metaSection);
	});

	const metaSection1 = document.querySelectorAll(".summary-metadata-container.summary-metadata-container--above-title");
	metaSection1.forEach((metaSection, index) => {
		metaSection?.classList.add("context-marker");
		document.querySelectorAll(".summary-thumbnail-outer-container")[index]?.appendChild(metaSection);
	});

	const newImg = document.querySelector(".summary-thumbnail > img").src
	const newImg1 = document.querySelectorAll(".summary-thumbnail > img")[0].src
	console.log('🚀 ~ newImg:', newImg)
	console.log('🚀 ~ newImg:', newImg1)
	if (newImg) {
		document.querySelector("img[src='https://images.squarespace-cdn.com/content/v1/6465baf2d00ad7078486fd8f/62f156aa-6937-4dae-96f5-426fec0ad156/image-asset.jpeg?format=2500w']").src = newImg;
		const newHref = document.querySelector(".summary-thumbnail-outer-container a").href;
		document.querySelector(".sqs-block-image-link.content-fill").href = newHref;
	}
	document.querySelector(".summary-item").remove();
};
