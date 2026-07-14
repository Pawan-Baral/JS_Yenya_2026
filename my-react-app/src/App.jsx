function Car(props) {
  const {brand,color,...rests} =props
  return (
    <>
      <h2>I am a {color} {brand}+" "+{props.model}</h2>
      
    </>
  );
}

function App() {
  const carInfo = ['ford','mustang','ferrari','lamborgini'];

  return <Car  brand="Ford" model="Mustang" color="red" year={1969} />;
}

export default App;