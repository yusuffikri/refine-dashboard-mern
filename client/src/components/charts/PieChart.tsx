import ReactApexChart from 'react-apexcharts'
import {Box, Typography, Stack} from '@pankod/refine-mui'
import  {PieChartProps} from 'interfaces/home'

const PieChart = ( {title, value, series, colors} : PieChartProps) => {
  return (
    <Box>
     <Stack direction='column'>
      <Typography fontSize={14} color="#808191" >{title}</Typography>
      <Typography fontSize={14} color="#11142d" fontWeight={700} mt={1}>{value}</Typography>
     </Stack>

     <ReactApexChart>
        options={{
          chart: {type: 'donut'},
          colors,
          legend: {show: 'false'},
          dataLabels: {enabled: 'false'},
        }}

     </ReactApexChart>

    </Box>
  )
}

export default PieChart