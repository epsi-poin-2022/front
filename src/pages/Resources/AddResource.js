import React, { useState } from "react";
import CustomButton from "../../components/buttons/CustomButton";
import CustomInput from "../../components/inputs/CustomInput";
import RequestAPI from "../../utils/RequestAPI";
import Title from "./../../components/elements/Title";

export default function AddResource() {
  const [label, setLabel] = useState();
  const [link, setLink] = useState();

  const submit = () => {
    RequestAPI("POST", "resources", {
      label: label,
      link: link,
    });
  };
  return (
    <div style={{ padding: 20 }}>
      <Title title="Add resource" />
      <CustomInput label="Name" setState={setLabel} />
      <CustomInput label="Path" setState={setLink} />
      <div style={{ paddingTop: 20 }}>
        <CustomButton title="Submit" />
      </div>
    </div>
  );
}
