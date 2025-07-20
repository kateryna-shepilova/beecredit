document.addEventListener("DOMContentLoaded", function () {
	initInputRangeHero()

	function initInputRangeHero() {
		const range = document.querySelector(".credit-form__range")

		function updateRangeBackground(el) {
			const min = el.min ? parseInt(el.min) : 0
			const max = el.max ? parseInt(el.max) : 100
			const val = parseInt(el.value)

			const percent = ((val - min) * 100) / (max - min)

			el.style.background = `linear-gradient(to right, orange ${percent}%, #eee ${percent}%)`
		}

		updateRangeBackground(range)

		range.addEventListener("input", () => updateRangeBackground(range))
	}
})
