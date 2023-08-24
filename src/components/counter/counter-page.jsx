import { Counter } from "./counter";
import Grid from "@mui/material/Unstable_Grid2";

const CounterPage = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={12} md={6} lg={4}>
          <Counter />        
        </Grid>   
        <Grid xs={12} md={6} lg={4}>
          <Counter />        
        </Grid>   
        <Grid xs={12} md={6} lg={4}>
          <Counter />        
        </Grid>   
        <Grid xs={12} md={6} lg={4}>
          <Counter />        
        </Grid>   
        <Grid xs={12} md={6} lg={4}>
          <Counter />        
        </Grid>   

      </Grid>

      <h1>Counters</h1>

    </>
  );
};

export default CounterPage;
