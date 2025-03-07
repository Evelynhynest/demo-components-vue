export default function useGrab(scrollEl: HTMLElement) {
  let isDragging = false
  let startX = 0,
    startY = 0
  let scrollLeft = 0,
    scrollTop = 0

  scrollEl.addEventListener('mousedown', (e) => {
    isDragging = true
    scrollEl.style.cursor = 'grabbing'
    scrollLeft = scrollEl.scrollLeft
    scrollTop = scrollEl.scrollTop
    startX = e.pageX
    startY = e.pageY
    console.log('down =>', startX, startY)
  })
  scrollEl.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const moveX = e.pageX - startX
      const moveY = e.pageY - startY
      const speed = 2
      scrollEl.scrollLeft = scrollLeft - moveX * speed
      scrollEl.scrollTop = scrollTop - moveY * speed
    }
  })
  scrollEl.addEventListener('mouseup', () => {
    isDragging = false
    scrollEl.style.cursor = 'grab'
  })
  scrollEl.addEventListener('mouseleave', () => {
    isDragging = false
    scrollEl.style.cursor = 'grab'
  })
}
