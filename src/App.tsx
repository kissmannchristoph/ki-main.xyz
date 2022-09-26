import { useState } from "react";
import "./styles.css";

interface Service {
  service: string;
  name: string;
}

function getServiceUrl(service: string) {
  return "https://" + service + ".ki-main.xyz";
}

const IFrame = ({
  service,
  name
}: Service) => {
  return <div style={{
    display: "flex",
    flexFlow: "column"
  }}>
    <p>{name}</p>
    <iframe src={service} width="100%" height="100%" style={{minHeight: "500px"}} />
  </div>
}

const ServiceButton = ({
  service,
  name,
  onClick
}: {service: string, name: string, onClick: any}) => {
  function clickService(event: any) {
    onClick({service, name});
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
      {service}
    </div>
  );
};

const Content = () => {
  const [service, setService] = useState<Service | undefined>();

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
        {(service) ?
        <IFrame service={service?.service} name={service?.name} /> : <></>
      }
      </div>
      <div style={{ padding: "0 20px" }}>
        <hr />
        <p>Services</p>
        <div
          style={{
            display: "flex",
            flexFlow: "column"
          }}
        >
          <ServiceButton name="VSCode" service={getServiceUrl("code")} onClick={(service: Service) => setService(service)}/>
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
