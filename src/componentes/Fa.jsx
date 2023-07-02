import Chil from './Chil';
const Fa = () => {
  const buttons = [
    { text: "Asadbek", color: "red" , background: "blue", border: "none" , margin: "100px", padding: "10px", borderr: "10px"},
    { text: "Afzalbek", color: "green", background: "yellow", border: "none" ,margin: "50px", padding: "10px", borderr: "10px"},
    { text: "Boburbek", color: "blue", background: "gray", border: "none" , margin: "200px", padding: "10px", borderr: "10px"},
    { text: "Dostonbek", color: "yellow", background: "orange", border: "none" , margin: "150px", padding: "10px", borderr: "10px"},
  ];
  return (
    <div>
      {buttons.map((value,) => (
        <Chil key={value.text} {...value} />
      ))}
    </div>
  );
};

export default Fa;