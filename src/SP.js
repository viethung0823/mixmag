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

	const newImg = document.querySelector(".summary-thumbnail > img")?.getAttribute('data-src');
	const newImg1 = document.querySelectorAll(".summary-thumbnail > img")[0]?.getAttribute('data-src');
	const newImg2 = document.querySelectorAll(".summary-thumbnail > img")[0]?.getAttribute('data-image');
	const newImg3 = document.querySelectorAll(".summary-thumbnail > img")[0]?.getAttribute('src')?.split('?')?.[0];

	const bigImg = document.querySelector("img[data-image='https://images.squarespace-cdn.com/content/v1/6465baf2d00ad7078486fd8f/f3ea4adb-f47d-47cd-a6e9-2e19e9c6900d/loading.gif']");
	bigImg.src = newImg || newImg1 || newImg2 || newImg3;
	bigImg.dataset.src= newImg || newImg1 || newImg2 || newImg3;
	bigImg.srcset = ""
	const newHref = document.querySelector(".summary-thumbnail-outer-container a").href;
	document.querySelector(".sqs-block-image-link.content-fill").href = newHref;
	document.querySelector(".sqs-html-content h3 a strong").innerText = document.querySelector(".summary-title-link").innerText;
	document.querySelector(".sqs-html-content h3 a").href = newHref;
	document.querySelector(".summary-item").remove();
};
