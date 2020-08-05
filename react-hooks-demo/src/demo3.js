import React, { memo } from 'react';

const setSatisfactionClass = (level) => {
    if (level < 100) {
        return "very-dissatisfied"
    }
    if (level < 200) {
        return "somewhat-dissatisfied"
    }
    if (level < 300) {
        return "neither"
    }
    if (level < 400) {
        return "somewhat-satisfied"
    }
    return "very-satisfied"
}
const isSameRange = (preValue, nextValue) => {
    console.log(preValue, nextValue)
    console.log(setSatisfactionClass(preValue.level))
    const preValueClass = setSatisfactionClass(preValue.level);
    const nextValueClass = setSatisfactionClass(nextValue.level);
    return preValueClass === nextValueClass;
}
export const FaceComponent = memo(props => {
    const { level } = props;
    return (
        <div className={setSatisfactionClass(level)}></div>
    )
}, isSameRange)
// memo 代替shouldComponentUpdate 减少重复渲染