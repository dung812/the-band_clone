window.addEventListener("load",function(){
    const btnBuySticket = document.querySelectorAll(".btn-sticket");
    const modal = document.querySelector(".modal");
    const btnCloseModal = document.querySelector(".modal-close");
    
    [...btnBuySticket].forEach(item => item.addEventListener("click",function(e){
        e.preventDefault();
        modal.classList.add("open");
    }));
    
    btnCloseModal.addEventListener("click",function(e){
        modal.classList.remove("open");
    });
    

    // Chức năng bấm vào button hambuger
    const btnMenuIcon = document.querySelector(".mobile-menu-btn");
    const headerElement = document.querySelector("#header");
    const heightHeader = headerElement.clientHeight;

    btnMenuIcon.addEventListener("click",function(e){
        if (headerElement.clientHeight === heightHeader) {
            headerElement.style.height = "auto"; // Hiện menu
        }
        else {
            headerElement.style.height = "46px"; // Ẩn menu
        }
    })

    // Chức năng bấm vào menu thì ẩn menu đi
    const listItemMenu = document.querySelectorAll('#nav > li a[href*="#"]');
    [...listItemMenu].forEach(item => item.addEventListener("click",function(e){
        let CheckSubnav = e.target.nextElementSibling && e.target.nextElementSibling.classList.contains('subnav');
        if (!CheckSubnav)
            headerElement.style.height = "46px"; // Ẩn menu
        else
            e.preventDefault();
    }))
});

