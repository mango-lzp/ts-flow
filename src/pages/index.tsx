import React from 'react';
import ReactDom from 'react-dom'
import Button from './button'
// @ts-ignore
import { sw } from '../service-worker'

sw()

ReactDom.render(<Button />, document.querySelector('#root'));