export default function ColorValue({ children, value }) {
  const color = value > 0 ? "text-green-500" : value < 0 ? "text-red-500" : "";
  return <span className={color}>{children}</span>;
}
