import React, { useState } from 'react'
import "./login.less"
import LoginBox from "@/component/user/loginbox"
export default function login() {
  let [isAccount, setisAccount] = useState(true)
  return (
    <>
      <LoginBox><span>56+</span></LoginBox>
    </>
  )
}
