// 子组件
export interface Props {
    userName: string
}
export const HelloComponent = (props) => (
    <h2>Hello user:{props.userName}</h2>
)