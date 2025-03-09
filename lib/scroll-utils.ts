export function scrollToElement(id: string) {
  const element = document.getElementById(id)
  if (element) {
    // Smooth scroll to element
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

