export default function Avatar({ size }) {
  let width = "w-12 h-12";
  if (size === "lg") {
    width = "w-36 h-36";
  }
  return (
    <div className={`${width} rounded-full overflow-hidden`}>
      <img
        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        alt=""
      />
    </div>
  );
}
