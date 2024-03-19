// import { Tooltip } from 'flowbite-react';
import { LineChart as LChart, Line,XAxis, YAxis,CartesianGrid,Tooltip } from 'recharts';
import CustomTooltip from '../CustomTooltip/CustomTooltip';

const LineChart = () => {

    const studentsMarks = [
        { id:1, name: 'Amin', math: 95, physics: 90, chemistry: 85 },
        { id:2, name: 'Rina', math: 92, physics: 88, chemistry: 82 },
        { id:3, name: 'Kamal', math: 88, physics: 85, chemistry: 90 },
        { id:4, name: 'Nadia', math: 85, physics: 89, chemistry: 87 },
        { id:5, name: 'Sohel', math: 90, physics: 92, chemistry: 84 },
        { id:6, name: 'Lina', math: 94, physics: 86, chemistry: 88 },
        { id:7, name: 'Farid', math: 89, physics: 91, chemistry: 86 },
        { id:8, name: 'Tina', math: 91, physics: 87, chemistry: 89 },
        { id:9, name: 'Rahim', math: 87, physics: 84, chemistry: 91 },
        { id:10, name: 'Moni', math: 93, physics: 88, chemistry: 90 }
    ]

    const getName = (math) => {

        if (math >= 80) {
            return "make a amazing result on math"
        }
        if (math >= 90) {
            return "make a notorious and extraordinary result on math"
        }
    }

    

    return (
        <>
        
        <LChart width={800} height={400} data={studentsMarks}>
            <Line type="monotone" dataKey="math" stroke="#8884d8" />
            <Line type="monotone" dataKey="physics" stroke="red" />
            <Line type="monotone" dataKey="chemistry" stroke="blue" />
            <CartesianGrid stroke='purple' strokeDasharray={ "6 9"} />
            <Tooltip content={<CustomTooltip studentsMarks={studentsMarks} getName={getName} />}></Tooltip>

            <XAxis dataKey={"name"} />
            <YAxis ></YAxis>
            
        </LChart>

        </>
    );
};

export default LineChart;