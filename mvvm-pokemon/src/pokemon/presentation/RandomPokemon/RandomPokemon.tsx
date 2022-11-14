export default function RandomPokemon() {
  return (
    <div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/default.png`}
          alt="default"
        />
      </div>
      <div>
        <button>Show Random</button>
      </div>
    </div>
  );
}
