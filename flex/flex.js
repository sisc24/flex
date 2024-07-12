const box = document.querySelectorAll('.box')

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting)
        })
    },
    {
        rootMargin: "-100px",
        threshold: 0.5,
    }
)

box.forEach(box => observer.observe(box));