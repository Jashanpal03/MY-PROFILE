  let buttons=document.querySelectorAll('.btncst  ')
  buttons.forEach(btn => {
    btn.onclick = function () {
        let demo = btn.closest('.card-body').querySelector('#demo');

        if (demo.style.display == 'none') {
            demo.style.display = 'inline';
        } else {
            demo.style.display = 'none';
        }
    };
});