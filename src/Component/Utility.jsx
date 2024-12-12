import { useSpring, animated } from "@react-spring/web";

function NumberAnimated(n) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 400,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.span> {number.to((n) => n.toFixed(0))}</animated.span>;
}
export default NumberAnimated;
