import { Button } from "antd"
import { Link } from "umi"
function index(props: any) {
    console.log(props);
    return (
        <>
            <div>全局页面</div>
            {props.children}
            <br />
            <Button type="default" onClick={() => {
                props.history.push("/user/13")
            }}>跳转到user详情</Button>
            <Button type="ghost" onClick={() => {
                props.history.push("/")
            }}>首页</Button>
            <Link to={"/user"}>跳转到user</Link>
        </>
    )
}
export default index
