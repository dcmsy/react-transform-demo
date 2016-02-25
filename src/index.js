//import 'common/lib';
//import  'antd/lib/index.css';
//import 'antd/style/index.less';

import React from 'react';
import ReactDOM,{ render } from 'react-dom';
import { App } from './App';

//时间轴
import { Timeline } from 'antd';
// Switch
import { Switch, Icon } from 'antd';
//进场动画
import { QueueAnim, Button, Checkbox, Radio } from 'antd';
const RadioGroup = Radio.Group;

import { Slider } from 'antd';





ReactDOM.render(<App />, document.getElementById('root'));

// Switch 开关 react-content-switch
ReactDOM.render(<div>
    <Switch checkedChildren="开" unCheckedChildren="关" checked='true'/>
    <span> </span>
    <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} />
</div>, document.getElementById('react-content-switch'));
//时间轴
ReactDOM.render(
    <Timeline>
        <Timeline.Item color="green">创建服务现场 2015-09-01</Timeline.Item>
        <Timeline.Item color="green">创建服务现场 2015-09-01</Timeline.Item>
        <Timeline.Item color="red">
            <p>初步排除网络异常1</p>
            <p>初步排除网络异常2</p>
            <p>初步排除网络异常3 2015-09-01</p>
        </Timeline.Item>
        <Timeline.Item>
            <p>技术测试异常1</p>
            <p>技术测试异常2</p>
            <p>技术测试异常3 2015-09-01</p>
        </Timeline.Item>
    </Timeline>
    , document.getElementById('react-content-timeline'));

//进场动画
const Test = React.createClass({
    getInitialState() {
        return {
            show: true
        };
    },
    onClick() {
        this.setState({
            show: !this.state.show
        });
    },
    render() {
        return (
            <div>
                <p className="buttons">
                    <Button type="primary" onClick={this.onClick}>切换</Button>
                </p>
                <QueueAnim component="form" className="ant-form-horizontal" type="bottom" leaveReverse>
              {this.state.show ? [
                  <div className="ant-form-item ant-form-item-compact" key="name">
                      <label htmlFor="userName" className="col-6" required>用户名：</label>
                      <div className="col-6" >
                          <p className="ant-form-text" >React-component-minix</p>
                      </div>
                  </div>,
                  <div className="ant-form-item" key="password">
                      <label htmlFor="password" className="col-6" required>密码：</label>
                      <div className="col-14">
                          <input className="ant-input" type="password" id="password" placeholder="请输入密码"/>
                      </div>
                  </div>,
                  <div className="ant-form-item ant-form-item-compact" key="sex">
                      <label className="col-6" required>您的性别：</label>
                      <div className="col-14">
                          <RadioGroup value="male">
                              <Radio value="male">男的</Radio>
                              <Radio value="female">女的</Radio>
                          </RadioGroup>
                      </div>
                  </div>,
                  <div className="ant-form-item" key="remark">
                      <label htmlFor="remark" className="col-6" required>备注：</label>
                      <div className="col-14">
                          <textarea className="ant-input" id="remark" placeholder="随便写"></textarea>
                          <p className="ant-form-explain">随便写点什么</p>
                      </div>
                  </div>,
                  <div className="ant-form-item ant-form-item-compact" key="checkbox">
                      <div className="col-14 col-offset-6">
                          <label>
                              <Checkbox />
                          同意
                          </label>
                      </div>
                  </div>,
                  <div className="row" key="btn">
                      <div className="col-16 col-offset-6">
                          <Button type="primary">确定</Button>
                      </div>
                  </div>
              ] : null}
                </QueueAnim>
            </div>
            );
    }
});
ReactDOM.render(<Test />, document.getElementById('react-content-anim'));

//滑动条
ReactDOM.render(<div>
        <Slider defaultValue={30} />
        <Slider range defaultValue={[20, 50]} />
        <Slider range defaultValue={[20, 50]} disabled />
    </div>
    , document.getElementById('react-content-slider'));