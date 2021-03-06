$(document).ready(function() {
	$('.figure_figureExtension').each(function() {
		var insertID = $(this)[0].getAttribute('id');
		var img = JSON.parse($(this)[0].getAttribute('data-img'));
		var title = $(this)[0].getAttribute('data-title');
		var caption = $(this)[0].getAttribute('data-caption');
		createFigure(insertID, img, title, caption);
	});
});

//Accepts single image path, or array of image paths
function createFigure(insertID, img, title, caption) {
	var figure,
		image,
		imageElement,
		figureCaption,
		span,
		paragraph,
		insertLocation;

	figure = document.createElement('figure');

	if (img.constructor === Array) {
		for (image in img) {
			imageElement = document.createElement('img');
			imageElement.src = img[image];
			figure.appendChild(imageElement);
		}
	} else {
		imageElement = document.createElement('img');
		imageElement.src = img;
		figure.appendChild(imageElement);
	}

	figureCaption = document.createElement('figcaption');

	span = document.createElement('span');
	span.classList.add('fig');
	span.innerHTML = title;

	paragraph = document.createElement('p');
	paragraph.innerHTML = caption;

	figureCaption.appendChild(span);
	figureCaption.appendChild(paragraph);

	figure.appendChild(figureCaption);

    insertLocation = document.getElementById(insertID);

    insertLocation.parentNode.insertBefore(figure, insertLocation);
    insertLocation.remove();
}