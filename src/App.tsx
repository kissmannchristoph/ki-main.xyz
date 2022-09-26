import "./styles.css";

const ServiceButton = ({
  service,
  name
}: {
  service: string;
  name: string;
}) => {
  function getServiceUrl() {
    return "https://" + service + ".ki-main.xyz";
  }
  function clickService(event: any) {
    console.log(getServiceUrl());
  }

  return (
    <div
      onClick={clickService}
      style={{
        padding: "5px 10px",
        borderRadius: "5px",
        backgroundColor: "blue",
        width: "fit-content",
        marginBottom: "10px",
        userSelect: "none",
        cursor: "pointer",
        textAlign: "center"
      }}
    >
      {name}
      <br />
      {getServiceUrl()}
    </div>
  );
};

const Content = () => {
  return (
    <div
      style={{
        color: "white"
      }}
    >
      <p style={{ textAlign: "center", fontSize: "1.2em" }}>
        Servernetzwerk Intern
      </p>
      <div style={{ padding: "0 20px" }}>
        <hr />
        <p>Services</p>
        <div
          style={{
            display: "flex",
            flexFlow: "column"
          }}
        >
          <ServiceButton name="VSCode" service="code" />
          <ServiceButton name="VSCode" service="code" />
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Content />
    </div>
  );
}
