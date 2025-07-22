document.addEventListener("DOMContentLoaded", function () {
	initBurger()
	initMenuOpenClose()
	initAccordion()

	const body = document.querySelector("body")
	function initBurger() {
		const menuToggle = document.querySelector(".menu-toggle")
		const menuClose = document.querySelector(".menu-close")

		menuToggle.addEventListener("click", function () {
			body.classList.add("header-active")
		})

		menuClose.addEventListener("click", function () {
			body.classList.remove("header-active")
		})
	}

	function initMenuOpenClose() {
		const menuLinks = document.querySelectorAll(".menu-item-has-children > a")

		menuLinks.forEach(link => {
			link.addEventListener("click", function (e) {
				e.preventDefault()

				const parent = this.parentElement
				const submenu = parent.querySelector(".drop-holder")

				const isOpen = parent.classList.contains("open")

				closeAllSubmenus()

				if (!isOpen) {
					parent.classList.add("open")

					submenu.style.maxHeight = submenu.scrollHeight + "px"

					submenu.addEventListener("transitionend", function handler() {
						submenu.style.maxHeight = "none"
						submenu.removeEventListener("transitionend", handler)
					})
				}
			})
		})

		function closeAllSubmenus() {
			const openItems = document.querySelectorAll(".menu-item.open")
			openItems.forEach(item => {
				const submenu = item.querySelector(".drop-holder")
				submenu.style.maxHeight = submenu.scrollHeight + "px"

				requestAnimationFrame(() => {
					submenu.style.maxHeight = "0px"
				})

				item.classList.remove("open")
			})
		}
	}

	function initAccordion() {
  const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(accordion => {
      const items = accordion.querySelectorAll(".accordion-item");

      items.forEach(item => {
        const opener = item.querySelector(".accordion-item__opener");
        const slide = item.querySelector(".accordion-item__slide");

        // Ensure the slide is collapsed initially
        slide.style.maxHeight = null;

        opener.addEventListener("click", () => {
          const isOpen = item.classList.contains("active");

          // Close all items within this accordion
          items.forEach(i => {
            i.classList.remove("active");
            i.querySelector(".accordion-item__slide").style.maxHeight = null;
          });

          // Toggle current item
          if (!isOpen) {
            item.classList.add("active");
            slide.style.maxHeight = slide.scrollHeight + "px";
          }
        });
      });
    });
	}
})
