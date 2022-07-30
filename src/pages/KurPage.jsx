import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  color,
  Flex,
} from "@chakra-ui/react";
import { React, useState, useEffect, useCallback } from "react";
import { useTimer } from "react-timer-hook";

//Context
import { useKurContext } from "../context/kurContext";

//Components
import Timer from "../components/Timer";
import Buttons from "../components/TouchPad";

export default function KurPage() {
  const { getKurById, kur, currentOef, kurRunning } = useKurContext();

  useEffect(() => {
    async function fetchData() {
      await getKurById();
    }
    fetchData();
  }, [getKurById]);

  return (
    <div className="scrollbar">
      <Timer length={300}></Timer>
      {/* <Scrollbars
        style={{ height: 300 }}

      > */}
      <TableContainer ml={"20px"} mr={"20px"}>
        <Table variant="striped" size={"sm"}>
          <Thead>
            <Tr>
              <Th>Oefening</Th>
              <Th isNumeric>Inzet</Th>
              <Th isNumeric>Aftrek</Th>
            </Tr>
          </Thead>
          <Tbody>
            {kur &&
              kur.oefeningen.map((oef, index) => {
                if (currentOef === index) {
                  return (
                    <Tr key={index} className="focus">
                      <Td>{oef.naam}</Td>
                      <Td isNumeric w={"20px"}>
                        {(Math.round(oef.punten * 100) / 100).toFixed(2)}
                      </Td>
                      <Td isNumeric w={"20px"}></Td>
                    </Tr>
                  );
                }

                if ((kurRunning && index-currentOef<7 && index>currentOef-2)||!kurRunning) {
                  return (
                    <Tr key={index}>
                      <Td>{oef.naam}</Td>
                      <Td isNumeric w={"20px"}>
                        {(Math.round(oef.punten * 100) / 100).toFixed(2)}
                      </Td>
                      <Td isNumeric w={"20px"}></Td>
                    </Tr>
                  );
                }
              })}
          </Tbody>
        </Table>
      </TableContainer>
      {/* </Scrollbars> */}
      {kurRunning && <Buttons />}
    </div>
  );
}
