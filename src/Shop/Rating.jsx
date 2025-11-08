export default function Rating({ value }) {
  const stars = ["gray", "gray", "gray", "gray", "gray"];

  for (let index = 0; index < value; index++) {
    stars.splice(index, 1, "yellow");
  }

  //   console.log(stars);

  return (
    <div className="flex text-yellow-400">
      {stars.map((star, index) => (
        <span
          key={index}
          className={`${star === "gray" ? "text-gray-300" : ""}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}
