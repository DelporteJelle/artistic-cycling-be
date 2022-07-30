import React, { useCallback } from "react";
import { useTimer } from "react-timer-hook";
import { Center, Text, Icon, Flex } from "@chakra-ui/react";
import { BsFillPauseFill, BsPlayFill } from "react-icons/bs";
import { BiRevision } from "react-icons/bi";
import { useKurContext } from "../context/kurContext";

function MyTimer({ expiryTimestamp, length, autoStart }) {
  const { resetKur, startKur, endKur, kurRunning } = useKurContext();

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    autoStart,
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  const handleStart = () => {
    startKur();
    start();
  };

  const handleReset = (time) => {
    resetKur()
    restart(time, false);
  }

  return (
    <Flex justifyContent={"center"} align="center" flexDir={"column"}>
      <Text className="clock" textColor={isRunning ? "#3E9FEA" : "grey"}>
        <span>{minutes}</span>:
        <span>{seconds <= 9 ? `0${seconds}` : seconds}</span>
      </Text>
      <Center>
        {isRunning ? (
          <button className="playpause pause" onClick={pause}>
            <Icon as={BsFillPauseFill} w={12} h={12} color="#3E9FEA" />
          </button>
        ) : (
          <button className="playpause play" onClick={handleStart}>
            <Icon as={BsPlayFill} w={12} h={12} color="grey" />
          </button>
        )}

        <button
          className="playpause restart"
          onClick={() => {
            const time = new Date();
            time.setSeconds(time.getSeconds() + length);
            restart(time, false);
            handleReset(time)
          }}
        >
          <Icon as={BiRevision} w={10} h={10} color="#F5494D" />
        </button>
      </Center>
    </Flex>
  );
}

export default function Timer({ length }) {
  const time = new Date();
  time.setSeconds(time.getSeconds() + length);
  return (
    <div>
      <MyTimer expiryTimestamp={time} length={length} autoStart={false} />
    </div>
  );
}
