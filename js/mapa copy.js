
		document.querySelectorAll(".all-path").forEach(e => {
           e.addEventListener("click", function () {
            window.onmousemove=function (j) {
                x = j.clientX
                y = j.clientY
                document.getElementById('name').style.top = y-60  + 'px'
                document.getElementById('name').style.left = x +10 + 'px'
            }
            
            // document.querySelectorAll(".allPaths").forEach(i => {
            //     i.style.fill = "#ececec"
            // })
            e.id = e.innerHTML
            e.style.fill = "pink"
            document.getElementById("name").style.opacity = 1
            const container = document.getElementById("name")
            const label = document.getElementById("namep");
            label.innerText = e.innerHTML;
            var img = document.createElement("img") ; 
            img.setAttribute("src", `/xampp/htdocs/comundo/img/mundo.jpg`);
            /* img.setAttribute("src", `/xampp/htdocs/comundo/img/${e.id}`); */
            img.setAttribute("height", "200");
            img.setAttribute("width", "200");
            container.append(img)
            


        })
        e.addEventListener("mouseleave", function () {
            e.style.fill = "#ececec"
            document.getElementById("name").style.opacity = 0
        })

/*         e.addEventListener("click",function(){
            getUser(e.id)
        }) */

    })
/* svg.addEventListener('mousemove', onMouseMove); */
/* var point = svg.createSVGPoint(); */
