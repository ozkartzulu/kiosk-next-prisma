
export const formatCurrent = (money) => {
    return money.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}