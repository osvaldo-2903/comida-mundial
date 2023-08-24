document.querySelectorAll(".all-path").forEach(e => {
    e.addEventListener("click", function () {
        window.onclick = function (j) {
            console.log("mouse clicked")
            x = j.clientX
            y = j.clientY
            document.getElementById('name').style.top = y - 60 + 'px'
            document.getElementById('name').style.left = x + 10 + 'px'
        }
        window.onmouseleave = function (j) {
            console.log("mouse left")
            fathercontainer.style.opacity = "0";
        }

        e.id = e.id;
        e.style.fill = "pink"
        const fathercontainer = document.getElementById("name")
        fathercontainer.style.opacity = 1

        const container = document.getElementById("name")
        const imgContainer = document.getElementById("img-container");
 /* 
        $.ajax({
            url: `/C:/xampp/htdocs/comida-mundial/img/paises/`,
            type: 'HEAD',
            success: function () {
                var fileName = e.id;
                var fileExtension = e.id.split('.').pop();

                // Create and attach the image element
                var img = document.createElement("img");
                img.setAttribute("src", `/C:/xampp/htdocs/comida-mundial/img/paises/${e.id}.jpg`);
                /* img.setAttribute("src", `/xampp/htdocs/comundo/img/${e.id}`); 
                img.setAttribute("height", "200");
                img.setAttribute("width", "200");
                console.log("File Name:", fileName);
                console.log("File Extension:", fileExtension);
            },
            error: function () {
                console.log("Failed to retrieve file information.");
            }
        }) 
 */
        const label = document.getElementById("namep");
        if (imgContainer.children.length > 0) {
            imgContainer.removeChild(imgContainer.children[0])
        }
        label.innerText = e.innerHTML;
        var img = document.createElement("img");
        img.setAttribute("src", `/comundo/img/paises/${e.id}`);
        img.setAttribute("height", "200");
        img.setAttribute("width", "200");
        imgContainer.appendChild(img)

    })

})