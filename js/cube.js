(function() {
    var imgs = document.querySelectorAll('.container-cube .box .pic img');
    var fullpage = document.querySelector('#fullpage');
    var box = document.getElementsByClassName('box')[0];
    var xN = 10, yN = 15;

    imgs.forEach(img => {
        img.addEventListener('click', function() {
            fullpage.style.backgroundImage = 'url(' + img.src + ')';
            fullpage.style.display = 'block';
        });
    });

    fullpage.addEventListener('click', function() {
        fullpage.style.display = 'none';
    });

    document.addEventListener('mousedown', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var x = e.clientX;
        var y = e.clientY;
        document.addEventListener('mousemove', move);
        document.addEventListener('mouseup', up);
        function move(e) {
            e.preventDefault();
            e.stopPropagation();
            var x1 = e.clientX;
            var y1 = e.clientY;
            xN += (x1 - x)*0.005;
            yN += (y1 - y)*0.005;
            box.style.transform = 'translateZ(-150px) rotateY(' + xN + 'deg) rotateX(' + -yN + 'deg)';
        }
        function up() {
            document.removeEventListener('mousemove', move);
        }
    });
}) ()