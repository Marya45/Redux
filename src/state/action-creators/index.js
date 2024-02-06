export const depositMoney = (amount)=>{
    //return a function jiske andar function call ho rha hai
    return (dispatch)=>{
        dispatch(
            {
                type: 'deposit',
                payload: amount
            }
        )
    }
}


export const withdrawMoney = (amount)=>{
    return (dispatch)=>{
        dispatch(
            {
                type: 'withdraw',
                payload: amount
            }
        )
    }
}