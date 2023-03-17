export const getOffsetLeftPosition = (ref) => ref?.current?.offsetLeft
export const getOffsetWith = (ref) => ref?.current?.offsetWidth

export const moveToPosition = (ref, position) => {
  ref.current.style.left = `${position}px`
}

export const getRelativeMousePosition = (position, ref) =>
  position - ref.current.getBoundingClientRect().left
