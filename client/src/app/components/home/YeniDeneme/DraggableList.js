import React, { useRef } from 'react';
import clamp from 'lodash-es/clamp';
import swap from 'lodash-move';
import { useDrag } from 'react-use-gesture';
import { useSprings, animated, interpolate } from 'react-spring';
import './Dragable.css';

// Returns fitting styles for dragged/idle items



function DraggableList() {
  const fn = (order, down, originalIndex, curIndex, y) => index => {
    console.log("spring----", order, down, originalIndex, curIndex, y);
    return down && index === originalIndex
      ? { y: curIndex * 100 + y, scale: 1.3, zIndex: '1', shadow: 15, immediate: n => n === 'y' || n === 'zIndex' }
      : { y: order.indexOf(index) * 100, scale: 1, zIndex: '1', shadow: 1, immediate: false }
  }
  const items = ["Bahar", "Ramazan", "Nehir", "Nilüfer"]
  const order = useRef(items.map((_, index) => index))
  console.log(order);// Store indicies as a local ref, this represents the item order
  const [springs, setSprings] = useSprings(items.length, fn(order.current))
  console.log("spring", springs); // Create springs, each corresponds to an item, controlling its transform, scale, etc.
  const bind = useDrag(({ args: [originalIndex], down, movement: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex)
    const curRow = clamp(Math.round((curIndex * 100 + y) / 100), 0, items.length - 1)
    console.log(order.current, curIndex, curRow);
    const newOrder = swap(order.current, curIndex, curRow);
    setSprings(fn(newOrder, down, originalIndex, curIndex, y)) // Feed springs new style data, they'll animate the view without causing a single render
    if (!down) order.current = newOrder
  })
  console.log("bind", bind);
  console.log("spring1", springs);
  return (
    <div className="content" style={{ height: items.length * 100 }}>
      {springs.map(({ zIndex, shadow, y, scale }, i) => (
        <animated.div
          {...bind(i)}
          key={i}
          style={{
            zIndex,
            boxShadow: shadow.interpolate(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
            transform: interpolate([y, scale], (y, s) => `translate3d(0,${y}px,0) scale(${s})`)
          }}
          children={items[i]}
        />
      ))}
    </div>
  )
}
export default DraggableList;