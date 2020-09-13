import React,{useState, useMemo} from 'react';
let obj = {
    0:'星期日',
    5:'星期五'
}
  const useClock = () => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        let timerID = setInterval(() => setDate(new Date()), 1000);
        showTime()
        return () => {
            clearInterval(timerID);
        }
    }, [])
    let dateStr = useMemo (() => {
        let day = date.getDay()
        return `${obj[day]}${date.toLocaleTimeString()}`
    },[date])
    return dateStr;
}
const Clock = () => {
    const date = useClock();
    return (
        <div>
            {date}
        </div>
    )
}
export default Clock