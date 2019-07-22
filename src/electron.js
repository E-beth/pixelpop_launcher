// Electron-specific code
(function () {
	const isElectron = navigator.userAgent.toLowerCase().includes(' electron/');
	if (!isElectron) {
		return;
	}
	const remote = require('electron').remote;
	const el = document.querySelector('#top_bar > :last-child');
	const closeBtn = document.createElement('button');
	closeBtn.textContent = 'X';
	closeBtn.style.float = 'right';
	closeBtn.style.marginLeft = '0.5rem';
	closeBtn.onclick = () => {
		remote.getCurrentWindow().close();
	};
	el.prepend(closeBtn);
}());
