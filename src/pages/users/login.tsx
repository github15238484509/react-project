import React, { useCallback, useState, useEffect, useRef } from 'react'
import "./login.less"
import LoginBox from "@/component/user/loginbox"
import logo from "@/public/img/logo.svg"
import { Link } from 'umi'
import Icon from "@/common/incon"
import { Button, Form, Input, Row, Col } from 'antd';
function Account() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  return (
    <Form
      className='from'
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        name="username"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
          { max: 16, message: '账户名长度不正确' },
          { min: 4, message: '账户名长度不正确' },
        ]}
      >
        <Input prefix={<Icon type="user"></Icon>} placeholder='请输入用户名' />
      </Form.Item>

      <Form.Item
        name="password"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
          { max: 6, message: '密码长度不正确' },
          { min: 6, message: '密码长度不正确' },
        ]}
      >
        <Input.Password prefix={<Icon type="lock"></Icon>} placeholder='请输入密码' />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );

}




function Phone() {
  const onFinish = useCallback((values) => {
    console.log('Success:', values);
  }, [])
  const [form] = Form.useForm();


  let [disabled, setDisabled] = useState(true)
  const mobileValChange = async () => {
    try {
      const status = await form.validateFields(['phone']);
      setDisabled(false);
    } catch (error) {
      setDisabled(true);
    }
  };


  let [CurrentTime, setCurrentTime] = useState(5)
  let [isSend, setisSend] = useState(false)
  const sendCode = () => {
    setDisabled(true)
    setisSend(true)
    runTime()
  }
  let runTime = () => {
    let timer = setInterval(() => {
      if (CurrentTime === 0) {
        clearInterval(timer)
        setCurrentTime(5);
        setisSend(false)
        mobileValChange()
        return;
      }
      setCurrentTime(--CurrentTime);
    }, 1000)
  }

  return (
    <Form
      form={form}
      className='from'
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        name="phone"
        hasFeedback
        rules={[
          {
            validator: (rule, val, callback) => {
              const mobileReg = /^1[3|4|5|6|7|8][0-9]\d{8}$/;
              switch (true) {
                case !Boolean(val):
                  return Promise.reject('手机号码不能为空');
                case !mobileReg.test(val):
                  return Promise.reject('手机号码格式不正确');
                default:
                  return Promise.resolve();
              }
            },
          },
        ]}
      >
        <Input onChange={mobileValChange} prefix={<Icon type="phone"></Icon>} placeholder='请输入手机号' />
      </Form.Item>

      <Form.Item
        name="code"
        hasFeedback
        rules={[
          {
            required: true,
            message: '请输入验证码!',
          },
          { max: 6, message: '密码长度不正确' },
          { min: 6, message: '密码长度不正确' },
        ]}
      >
        <Row>
          <Col span={13}><Input prefix={<Icon type="code"></Icon>} placeholder='请输入验证码' /></Col>
          <Col flex="auto"><Button onClick={sendCode} disabled={disabled} block>
            {!isSend ? "发送验证码" : `${CurrentTime}秒后重新发送`}
          </Button></Col>
        </Row>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
}























export default function login() {
  let [isAccount, setisAccount] = useState(false)
  return (
    <>
      <LoginBox>
        <div className='container'>
          <div className='logoName'>
            <img src={logo} alt="" />织信人事管理系统
          </div>
          {isAccount ? <Account /> : <Phone />}
          <div className='link'>
            <Link to="/users/forgetPassword"> 忘记密码？</Link>
            <div className=''>
              <span className='mr5' onClick={() => {
                setisAccount(!isAccount)
              }}>{isAccount ? "使用手机号码登录" : '使用账户名密码进行登录'}
              </span>
              <Icon type="right"></Icon>
            </div>
          </div>
        </div>
      </LoginBox>
    </>
  )
}
