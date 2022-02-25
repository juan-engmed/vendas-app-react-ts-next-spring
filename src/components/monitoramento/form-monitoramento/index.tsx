import { Input } from "components/commom/input";
import { useState } from "react";

export const MonitoramentoRealTime: React.FC = () => {
  const [age, setAge] = useState<string>("");
  return (
    <>
      <div className="columns is-centered">
        <div className="field column is-three-fifths">
          <div className="card is-centered">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <p>Smartband</p>
                  <p>Xiaomi MI 5</p>
                </div>
                <div className="media-content has-text-centered">
                  <p className="title is-4">Juan Oliveira</p>
                  <p className="subtitle is-6">30 anos</p>
                  <p className="subtitle is-6">Rio de Janeiro - RJ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns is-centered">
        <iframe
          width="1200
          "
          height="300"
          src="https://embed.tago.io?widget=620ce48aec8d8f001226aa55&dashboard=620ce32f1dbc6800146ee421&token=03e859aa-028d-481a-82d2-71597bf6a3d2"
          frameBorder="0"
          allowFullScreen
        />
      </div>

      <div className="columns">
        <div className="is-one-fifth">
          <iframe
            width="200"
            height="200"
            src="https://embed.tago.io?widget=620ce6409546920011283f07&dashboard=620ce32f1dbc6800146ee421&token=cf318361-0a0a-4277-88d0-f639c4925894"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className="is-half">
          <iframe
            width="1000"
            height="200"
            src="https://embed.tago.io?widget=620cec8662277b0011b916d7&dashboard=620ce32f1dbc6800146ee421&token=1e905ebd-ded6-4471-853c-40544f7331df"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>

      <div className="columns">
        <iframe
          width="1200"
          height="300"
          src="https://embed.tago.io?widget=6218f21a5f599d0019b6c986&dashboard=620ce32f1dbc6800146ee421&token=726a2908-d4fc-45c3-82a2-424557cf1ed4"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </>
  );
};
