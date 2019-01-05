import React from 'react'
import Order from './Order'
import { OrderStatus } from '../constants/order-status'

export default () => (
    <ul class="collection with-header">
        <Order client="Client 1" status={OrderStatus.NEW}/>
        <Order client="Client 2" status={OrderStatus.PREPARING}/>
    </ul>
)