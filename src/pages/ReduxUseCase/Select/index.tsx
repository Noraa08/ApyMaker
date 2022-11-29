import React, { useState } from 'react'
import tw from 'twin.macro';

interface IPermission {
    id: number;
    dailyMax: number;
    shiftTime?: number;
    cashierId: number;
    rebate: IRebate[]
}

interface IRebate {
    type: string;
    value: number[]
}

const Select = () => {
    const [rebateType, setRebateType] = useState<string>('');
    const [rebateValue, setRebateValue] = useState<number>();

    const [userPermission, setUserPermission] = useState<IPermission>(
        {
            "id": 3,
            "dailyMax": 100,
            "shiftTime": 8,
            "cashierId": 1,
            "rebate": [
                {
                    "type": "time",
                    "value": [1800, 3600, 7200]
                },
                {
                    "type": "money",
                    "value": [50, 100, 200, 500, 1000]
                },
            ]
        }
    );

    const randeredType = userPermission.rebate.map(({ type }) => <option value={type} key={type}>{type}</option>)
    const randeredValues = userPermission.rebate.map(({ type, value }) => {
        if (rebateType === type) {
            return value.map((num) => <option value={num} key={num}>{num}</option>)
        }
    })

    return (
        <Container>
            <form>
                <select id="rebateType" value={rebateType} onChange={(e) => setRebateType(e.target.value)} >
                    {randeredType}
                </select>

                <select id="rebateValue" value={rebateValue} onChange={(e) => setRebateValue(e.target.value as any)} >
                    {randeredValues}
                </select>
            </form>
        </Container>
    )
}

export default Select

const Container = tw.div`
    w-full 
    h-full
    flex flex-col items-center
`;