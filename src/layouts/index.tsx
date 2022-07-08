import { Button } from "antd"
import { Link } from "umi"
let usersFilter = ["/users/login", "/users/forgetPassword"]

function index(props: any) {
    // console.log(props);
    let path = props.location.pathname.toLocaleLowerCase()
    // console.log(path);
    if (usersFilter.includes(path)) {
        return props.children
    }
    return (
        <>456
            {props.children}
            <br />
        </>
    )
}
export default index
