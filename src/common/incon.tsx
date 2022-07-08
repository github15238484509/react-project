import React from 'react'
import {
    ArrowRightOutlined,
    UserOutlined, CodeSandboxOutlined, MobileOutlined, LockOutlined
} from "@ant-design/icons"
let types = {
    right: <ArrowRightOutlined />,
    user: <UserOutlined />,
    code: <CodeSandboxOutlined />,
    phone: <MobileOutlined />,
    lock: <LockOutlined />
}
export default React.memo(function incon(props: any) {
    return (types[props.type])
})
