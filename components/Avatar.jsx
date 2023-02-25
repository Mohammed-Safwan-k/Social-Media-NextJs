export default function Avatar({ size, url }) {
  let width = "w-12 h-12";
  if (size === "lg") {
    width = "md:w-36 md:h-36 w-24 h-24";
  }
  return (
    <div className={`${width} rounded-full overflow-hidden`}>
      <img src={url} alt="" />
    </div>
  );
}
