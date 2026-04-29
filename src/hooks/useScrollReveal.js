import { useEffect, useRef } from 'react'

/**
 * useScrollReveal Hook
 * Triggers animations when elements enter the viewport
 * Usage: const ref = useRef(); useScrollReveal(ref);
 */
export function useScrollReveal(options = {}) {
  const ref = useRef()
  const { threshold = 0.2, rootMargin = '0px' } = options

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold, rootMargin })

    observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [threshold, rootMargin])

  return ref
}