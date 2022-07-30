import { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useKurContext } from "../context/kurContext";

export default function Buttons() {
  // const [aftrek, setAftrek] = useState({tien: 0, wel: 0, procent:0, val:0});
  let aftrek = {tien: 0, wel: 0, procent:0, val:0}
  const states = []
  const {addAftrek, currentOef, endKur} = useKurContext();

  const addValue = (waarde) => {
    states.push({tien:aftrek.tien, wel:aftrek.wel, procent:aftrek.procent, val:aftrek.val})
    // setStates(states, {tien:aftrek.tien, wel:aftrek.wel, procent:aftrek.procent, val:aftrek.val})
    switch(waarde){
      case 0:
        aftrek.tien++
        break;
      case 1:
        aftrek.wel++
        break;
      case 2:
        aftrek.procent++
        break;
      case 3:
        aftrek.val++
        break;
      default:
        // setAftrek(aftrek)
    }
    console.log(states)
    console.log(aftrek)
  }

  const volgende = () => {
    addAftrek(aftrek)
    // setAftrek({tien: 0, wel: 0, procent:0, val:0})
    aftrek = {tien: 0, wel: 0, procent:0, val:0}
    if(currentOef === 29){
      endKur()
    }
  }

  const verwijder = () => {
    console.log(states)
    if(states.length>0){
      const ps = states.pop()
      // setAftrek({tien: 0, wel: 0, procent:0, val:0})
      aftrek = ps

      console.log(aftrek)
    }
  }

  return (
    <Grid
      className="touchPad"
      gap={2}
      templateRows="repeat(2, 50px)"
      templateColumns="repeat(3, 100px)"
    >
      <GridItem>
        <button className="b" onClick={() => addValue(0)}>0.10</button>
      </GridItem>
      <GridItem>
        <button className="b" onClick={() => addValue(1)}>0.50</button>
      </GridItem>
      <GridItem>
        <button className="b" onClick={() => addValue(2)}>10/50/100</button>
      </GridItem>
      <GridItem>
        <button className="b" onClick={() => addValue(3)}>1</button>
      </GridItem>
      <GridItem>
        <button className="g" onClick={volgende}>Volgende</button>
      </GridItem>
      <GridItem>
        <button className="r" onClick={verwijder}>Verwijder</button>
      </GridItem>

      {/* <Box className="button">10</Box>
      <Box className="button">50</Box>
      <Box className="button">procenten</Box>
      <Box className="button">vallen</Box>
      <Box className="button">Next</Box> */}
    </Grid>
  );
}
