import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import CustomButton from "../components/buttons/CustomButton";
import CustomInput from "../components/inputs/CustomInput";

const Container = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export default function Login() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    console.log(userName);
  }, [userName]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <CustomInput label="Username" setState={setUserName} />
        <CustomInput label="Password" type="password" setState={setPassword} />
        <div>
          <CustomButton title="Connexion" />
        </div>
      </Container>
    </div>
  );
}
