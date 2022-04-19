import React, { useState } from "react";
import CustomButton from "../../components/buttons/CustomButton";
import CustomInput from "../../components/inputs/CustomInput";
import Title from "./../../components/elements/Title";

export default function AddResource() {
  const [name, setName] = useState();
  const [path, setPath] = useState();
  return (
    <div style={{ padding: 20 }}>
      <Title title="Add resource" />
      <CustomInput label="Name" setState={setName} />
      <CustomInput label="Path" setState={setPath} />
      <div style={{ paddingTop: 20 }}>
        <CustomButton title="Submit" />
      </div>
    </div>
  );
}
