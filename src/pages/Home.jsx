import { Flex, Link, Text, Wrap, WrapItem, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-carousel-minimal";

export default function Home() {
  const navigate = useNavigate();
  const data = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
    },
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    },
  ];

  const routeToKur = () => {
    navigate("/kur", { replace: true });
  };
  const routeToData = () => {
    navigate("/data", { replace: true });
  };
  const routeToCalendar = () => {
    navigate("/calendar", { replace: true });
  };

  return (
    <>
      <Text className="title g">Artistic Cycling Belgium</Text>

      <Carousel
        data={data}
        time={10000}
        width="850px"
        height="400px"
        radius="10px"
        slideNumber={false}
        automatic={true}
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        style={{
          textAlign: "center",
          maxWidth: "850px",
          maxHeight: "500px",
          margin: "0px auto 40px auto",
        }}
      />

      <Center>
        <Wrap maxW="1000px" mt={"40px"}>
          <WrapItem onClick={routeToKur} className="block">
            <div className="rectangle"></div>
            <Text className="header g" m={"0 auto"}>
              Kur
            </Text>
          </WrapItem>
          <WrapItem onClick={routeToData} className="block">
            <div className="rectangle"></div>
            <Text className="header g" m={"0 auto"}>
              Wedstrijden
            </Text>
          </WrapItem>
          <WrapItem onClick={routeToCalendar} className="block">
            <div className="rectangle"></div>
            <Text className="header g" m={"0 auto"}>
              Kalender
            </Text>
          </WrapItem>
          <WrapItem onClick={routeToKur} className="block">
            <div className="rectangle"></div>
            <Text className="header g" m={"0 auto"}>
              placeholder
            </Text>
          </WrapItem>
        </Wrap>
      </Center>

      <Flex flexDirection="column" alignItems={"center"}>
        <Link href="/login">Login</Link>
      </Flex>
    </>
  );
}
