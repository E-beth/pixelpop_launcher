// Electron-specific code
(function () {
	const isElectron = navigator.userAgent.toLowerCase().includes(' electron/');
	if (!isElectron) {
		return;
	}
	const remote = require('electron').remote;
	const el = document.querySelector('#select_screen > header');
	const closeBtn = document.createElement('button');
	closeBtn.textContent = 'X';
	closeBtn.className = 'ui-btn';
	closeBtn.onclick = () => {
		remote.getCurrentWindow().close();
	};
	el.appendChild(closeBtn);
}());
