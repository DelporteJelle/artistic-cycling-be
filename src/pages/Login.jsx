import { Box, Center, Input, Text } from "@chakra-ui/react";

export default function Login() {
  return (
    <Center mt={"100px"}>
      <Box
        w="1000px"
        h={"500px"}
        borderRadius="10px"
        p={"20px"}
        boxShadow="2xl"
      >
        <Text className="inputMsg g">Username:</Text>
        <Input size="lg" className="input" />
        <Text className="inputMsg g">Email:</Text>
        <Input size="lg" className="input" />
        <Text className="inputMsg g">Password:</Text>
        <Input size="lg" className="input" />
        <Text className="inputMsg g">Confirm password:</Text>
        <Input size="lg" className="input" />
      </Box>
    </Center>
  );
}
