// Funzione (asincrona) che permette di inizilaizzare una webcam

export async function initCamera(videoElement, width, height, fps) {

	const constraints = {
		audio: false,
		video: {
			facingMode: "user",
			width: width,
			height: height,
			frameRate: { max: fps }
		}
	}

	videoElement.width = width
	videoElement.height = height

	const stream = await navigator.mediaDevices.getUserMedia(constraints)
	videoElement.srcObject = stream

	return new Promise(resolve => {
		videoElement.onloadedmetadata = () => { resolve(videoElement) }
	})
}