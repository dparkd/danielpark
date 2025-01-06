// Create a single video element for all hoverDivs
const hoverVideo = document.createElement('video');
hoverVideo.style.position = 'absolute';
hoverVideo.style.width = '300px';
hoverVideo.style.height = '700px';
hoverVideo.style.display = 'none';
hoverVideo.style.pointerEvents = 'none';
hoverVideo.muted = true;
hoverVideo.autoplay = true;
hoverVideo.loop = true;
document.body.appendChild(hoverVideo);

// Add event listeners to all hoverDivs
document.querySelectorAll('.project').forEach(div => {
  div.addEventListener('click', (event) => {
    const urlSrc = div.getAttribute('data-url');
    window.location.href = urlSrc;
  });

});
