import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Muath"} lastName={"Alrefai"} age={27} hairColor={"Dark Brown"} />
      <PersonCard firstName={"Nasri"} lastName={"Ladaa"} age={31} hairColor={"Dark Brown"} />
      <PersonCard firstName={"Kareem"} lastName={"Taha"} age={25} hairColor={"Baldman <3"} />
      <PersonCard firstName={"Yazan"} lastName={"Kayed"} age={24} hairColor={"Brown"} />
    </div>
  );
}

export default App;
