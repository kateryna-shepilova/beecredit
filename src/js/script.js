document.addEventListener("DOMContentLoaded", function () {
	initBurger()
	initMenuOpenClose()

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
})
