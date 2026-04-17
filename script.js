const timeEl = document.getElementById('epochTime');
  function updateTime() {
    timeEl.textContent = Date.now() + ' ms';
  }
  updateTime();
  setInterval(updateTime, 500);

  // ── Avatar upload handler ──
  const avatarInput = document.getElementById('avatarUpload');
  const avatarImg   = document.getElementById('avatarImg');

  avatarInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = function (ev) {
      avatarImg.src = ev.target.result;
      avatarImg.alt = 'User uploaded profile photo';
    };
    reader.readAsDataURL(file);
  });
