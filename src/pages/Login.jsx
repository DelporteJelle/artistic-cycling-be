import { Box, Center, Text } from "@chakra-ui/react";
import InputField from "../components/input";
import{ useState } from "react";
import suite from "../suite";
import classnames from "vest/classnames";

export default function Login() {
  const [formstate, setFormstate] = useState({});
  const [usernamePending, setUsernamePending] = useState(false);

  const handleChange = (currentField, value) => {
    const nextState = { ...formstate, [currentField]: value };
    const result = suite(nextState, currentField);
    setFormstate(nextState);

    if (currentField === "username") {
      setUsernamePending(true);
    }

    result.done((res) => {
      setUsernamePending(false);
    });
  };

  const res = suite.get();

  const cn = classnames(res, {
    invalid: "error",
    valid: "success",
    warning: "warning"
  });

  return (
    <Center mt={"100px"}>
      <Box
        w="1000px"
        h={"550px"}
        borderRadius="10px"
        p={"20px"}
        boxShadow="2xl"
      >
        <Text className="inputMsg g">Username:</Text>
        {/* <Input size="lg" className="input" /> */}
        <InputField
        name="username"
        onChange={handleChange}
        messages={res.getErrors("username")}
        className={cn("username")}
        pending={usernamePending}
      />
        <Text className="inputMsg g">Email:</Text>
        {/* <Input size="lg" className="input" /> */}
        <Text className="inputMsg g">Password:</Text>
        {/* <Input size="lg" className="input" /> */}
        <Text className="inputMsg g">Confirm password:</Text>
        {/* <Input size="lg" className="input" /> */}

        <button className="loginBtn"> Submit</button>
      </Box>
    </Center>
  );
}
